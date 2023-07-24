import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { PrintPopUpComponent } from '../print-pop-up/print-pop-up.component';
import { MainService } from '../../Services/main.service';
import { groupSimpleModel } from '../../Services/groups.service';
import { supervisorSimpleModel } from '../../Services/supervisor.service';
import { studentSimpleModel } from '../../Services/student.service';
import { citiesModel } from '../../Services/school-report.service';

@Component({
  selector: 'app-report-trips',
  templateUrl: './report-trips.component.html',
  styleUrls: ['./report-trips.component.css']
})
export class ReportTripsComponent implements OnInit {
  isJourneyFormSelected:boolean = true;
  isSupervisorFormSelected:boolean = false;
  isAbsenceFormSelected:boolean = false;
  supervisors:supervisorSimpleModel[]=[];
  students:studentSimpleModel[]=[];
  cities:citiesModel[]=[];
  groups:groupSimpleModel[] = [];
  journeyReportForm:FormGroup = new FormGroup({});
  supervisorReportForm:FormGroup = new FormGroup({});
  absentReportForm:FormGroup = new FormGroup({});
  constructor(private service:MainService,private elementRef:ElementRef){}
  ngOnInit(): void {
    this.createJourneyReportForm();
    this.createSupervisorReportForm();
    this.createAbsentReportForm();
    this.getAllGroups();
    this.getAllSupervisors();
    this.getAllStudents();
    this.getAllCities();
  }

   createSupervisorReportForm(){
    this.supervisorReportForm = this.service.formBuilder.group({
      supervisorId:['',[Validators.required]],
      groupId:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]],
      journeyDate:['',[Validators.required]],
    });
   }
   createJourneyReportForm(){
    this.journeyReportForm = this.service.formBuilder.group({
      studentId:['',[Validators.required]],
      supervisorId:['',[Validators.required]],
      groupId:['',[Validators.required]],
      journeyDate:['',[Validators.required]],
      outboundJourney:[false,[Validators.required]],
      returnJourney:[false,[Validators.required]],
    });
   }
   createAbsentReportForm(){
    this.absentReportForm = this.service.formBuilder.group({
      supervisorId:['',[Validators.required]],
      studentId:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]],
      reason:['',[Validators.required]],
    });
   }
   
   getAllGroups(){
     this.groups = this.service.groupService.getGroups();
   }

   getAllSupervisors(){
    this.supervisors = this.service.supervisorService.getSupervisors();
  }
  getAllStudents(){
    this.students = this.service.studentService.getStudents();
  }
  getAllCities(){
    this.cities = this.service.schoolReportService.getAllCities();
  }
  selectJourneyForm(){
    this.isJourneyFormSelected = true;
    this.isAbsenceFormSelected = false;
    this.isSupervisorFormSelected = false;
  }
  selectSupervisorForm(){
    this.isSupervisorFormSelected = true;
    this.isJourneyFormSelected = false;
    this.isAbsenceFormSelected = false;
  }
  selectAbsenceForm(){
    this.isAbsenceFormSelected = true;
    this.isJourneyFormSelected = false;
    this.isSupervisorFormSelected = false;
  }

  getJourneyReportSubmit(){
    this.service.printFormValues(this.journeyReportForm);
    this.service.schoolReportService.getJourneyReport(this.journeyReportForm.value).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

  getSupervisorReportSubmit(){
    this.service.printFormValues(this.supervisorReportForm);
    this.openDialog();
    this.service.schoolReportService.getSupervisorReport(this.supervisorReportForm.value).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

  getAbsentReportSubmit(){
    this.service.printFormValues(this.absentReportForm);
    this.service.schoolReportService.getAbsenceReport(this.absentReportForm.value).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

  openDialog() {
    const dialogRef = this.service.dialog.open(PrintPopUpComponent, {
      width: '40%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
      data: { name: 'Angular Material' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
  @ViewChild('dialog', { static: true }) set content(content: ElementRef) {
    this.elementRef = content;
  }

}
