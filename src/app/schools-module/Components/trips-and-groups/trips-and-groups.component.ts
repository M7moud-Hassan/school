import { Component, ElementRef, OnInit } from '@angular/core';
import { TripsAndGroupsService, tripsListModel } from '../../Services/trips-and-groups.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JourneyReportModel } from '../../Core/Models/journey-report-model';
import { ChangeSupervisorPopUpComponent } from '../change-supervisor-pop-up/change-supervisor-pop-up.component';
import { AddNewStudentToGroupPopUpComponent } from '../add-new-student-to-group-pop-up/add-new-student-to-group-pop-up.component';
import { MainService } from '../../Services/main.service';
import { groupSimpleModel } from '../../Services/groups.service';
import { studentSimpleModel } from '../../Services/student.service';
import { supervisorSimpleModel } from '../../Services/supervisor.service';


@Component({
  selector: 'app-trips-and-groups',
  templateUrl: './trips-and-groups.component.html',
  styleUrls: ['../report-trips/report-trips.component.css','../today-journey/today-journey.component.css', '../activities/activities.component.css','./trips-and-groups.component.css'],
})
export class TripsAndGroupsComponent implements OnInit {

  showGroupsManagment:boolean = true;
  showTripReport:boolean = false;
  showtripAppointment:boolean = false;
  isSchoolAccountDropdownVisible:boolean = false;
  journies:tripsListModel[]=[];
  groups:groupSimpleModel[]=[];
  supervisors:supervisorSimpleModel[]=[];
  students:studentSimpleModel[]=[];
  studentsNames:string[]=[];
  pageNo: number = 1;
  pageSize: number = 8;
  total :number =  this.journies.length;
  tripSearchReportForm:FormGroup = new FormGroup({});

  constructor(private service:MainService,private elementRef:ElementRef,){}

  ngOnInit(): void {
    this.getTripsList();
    this.createForm();
    this.getGroups();
    this.getStudents();
    this.getStudentNames();
    this.getSupervisor();
  }

  getTripsList(){
    this.journies = this.service.tripsAndGroupsService.getTripsList();
  }
  getGroups(){
    this.groups = this.service.groupService.getGroups();
  }
  getStudents(){
    this.students = this.service.studentService.getStudents();
  }
  getStudentNames(){
    this.studentsNames = this.service.studentService.getStudentNames();
  }
  getSupervisor(){
    this.supervisors = this.service.supervisorService.getSupervisors();
  }
  
   createForm(){
    this. tripSearchReportForm = this.service.formBuilder.group({
      studentId:['',[Validators.required]],
      supervisorId:['',[Validators.required]],
      groupId:['',[Validators.required]],
      journeyDate:['',[Validators.required]],
      outboundJourney:[false,[Validators.required]],
      returnJourney:[false,[Validators.required]],
    });
   }
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  changePage(i:any){
  if(i==1){
    this.showGroupsManagment = true;
    this.showTripReport = false;
    this.showtripAppointment = false;
  }else if(i==2){
    this.showGroupsManagment = false;
    this.showTripReport = true;
    this.showtripAppointment = false;
  }else if(i==3){
    this.showGroupsManagment = false;
    this.showTripReport = false;
    this.showtripAppointment = true;
  }
  }

  getJourneyReportSubmit(){
    this.service.printFormValues(this.tripSearchReportForm);
    this.service.tripsAndGroupsService.searchTripReport(this.tripSearchReportForm.value).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

  openChangeGroupSupervisorDialog(){
    this.openDialog();
  }
  openDialog() {
    const dialogRef = this.service.dialog.open(ChangeSupervisorPopUpComponent, {
      width: '50%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
      data: { name: 'Angular Material' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
  openAddStudentToGroupDialog(){
    this.addStudentToGroupDialog();
  }
  addStudentToGroupDialog() {
    const dialogRef = this.service.dialog.open(AddNewStudentToGroupPopUpComponent, {
      width: '50%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
      data: { name: 'Angular Material' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
}
