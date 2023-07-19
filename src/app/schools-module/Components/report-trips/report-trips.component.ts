import { Component, ElementRef, ViewChild } from '@angular/core';
import { SchoolReportService } from '../../Services/school-report.service';
import { JourneyReportModel } from '../../Core/Models/journey-report-model';
import { SupervisorReportModel } from '../../Core/Models/supervisor-report-model';
import { AbsenceReportModel } from '../../Core/Models/absence-report-model';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PrintPopUpComponent } from '../print-pop-up/print-pop-up.component';

@Component({
  selector: 'app-report-trips',
  templateUrl: './report-trips.component.html',
  styleUrls: ['./report-trips.component.css']
})
export class ReportTripsComponent {
  isJourneyFormSelected:boolean = true;
  isSupervisorFormSelected:boolean = false;
  isAbsenceFormSelected:boolean = false;
  journeyReportModel:JourneyReportModel = {} as JourneyReportModel;
  supervisorReportModel:SupervisorReportModel = {} as SupervisorReportModel;
  absenceReportModel:AbsenceReportModel = {} as AbsenceReportModel;

  constructor(private schoolReportService:SchoolReportService,private fb:FormBuilder,private elementRef:ElementRef,private dialog: MatDialog,){}

  journeyReportForm = this.fb.group({
    studentId:['',[Validators.required]],
    supervisorId:['',[Validators.required]],
    groupId:['',[Validators.required]],
    journeyDate:['',[Validators.required]],
    outboundJourney:[false,[Validators.required]],
    returnJourney:[false,[Validators.required]],
  });

  supervisorReportForm = this.fb.group({
    supervisorId:['',[Validators.required]],
    groupId:['',[Validators.required]],
    from:['',[Validators.required]],
    to:['',[Validators.required]],
    journeyDate:['',[Validators.required]],
  });

  absentReportForm = this.fb.group({
    supervisorId:['',[Validators.required]],
    studentId:['',[Validators.required]],
    from:['',[Validators.required]],
    to:['',[Validators.required]],
    reason:['',[Validators.required]],
  });

  groups=[
    {id:1,name:'المجموعة الاولى'},
    {id:3,name:'المجموعة الثانية'},
    {id:2,name:'المجموعة الثالثة'},
    {id:4,name:'المجموعة الرابعة'},
    {id:5,name:'المجموعة الخامسة'},
    {id:6,name:'المجموعة السادسة'},
    {id:7,name:'المجموعة السابعة'},
    {id:8,name:'المجموعة الثامنة'},
    {id:9,name:'المجموعة التاسعه'},
    {id:10,name:'المجموعة العاشرة'},
  ];
  students=[
    {id:1,name:'محمد حسن احمد'},
    {id:2,name:'خاد مصطفى عبدالجابر'},
    {id:3,name:'ابراهيم على قايد'},
    {id:4,name:'السيد احمد محمد'},
    {id:5,name:'مازن مصطفى على'},
    {id:6,name:'عبدالله احمد السيد'},
    {id:7,name:'مراد احمد السيد'},
    {id:8,name:'فراج على ناصف'},
    {id:10,name:'المنتصر بالله احمد'},
    {id:11,name:'رمضان احمد جاد الكريم'},
    {id:12,name:'محمد السيد على'},
    {id:13,name:'كمال على مصطفى'},
    {id:14,name:'المنذر على هاشم'},
    {id:15,name:'محمد مصطفى هاشم'},
    {id:16,name:'كمال السيد عباس'},
    {id:17,name:'حماده احمد حماده'},
    {id:18,name:'تيمور على البنا'},
    {id:19,name:'الماجد على اللبان'},
    {id:20,name:'احمد شريف السيد'},
  ];
  supervisors=[
    {id:30,name:'المنتصر بالله احمد'},
    {id:37,name:'حماده احمد حماده'},
    {id:27,name:'مراد احمد السيد'},
    {id:40,name:'احمد شريف السيد'},
    {id:32,name:'محمد السيد على'},
    {id:21,name:'محمد حسن احمد'},
    {id:33,name:'كمال على مصطفى'},
    {id:28,name:'فراج على ناصف'},
    {id:36,name:'كمال السيد عباس'},
    {id:22,name:'خاد مصطفى عبدالجابر'},
    {id:26,name:'عبدالله احمد السيد'},
    {id:25,name:'مازن مصطفى على'},
    {id:24,name:'السيد احمد محمد'},
    {id:33,name:'رمضان احمد جاد الكريم'},
    {id:38,name:'تيمور على البنا'},
    {id:34,name:'المنذر على هاشم'},
    {id:35,name:'محمد مصطفى هاشم'},
    {id:23,name:'ابراهيم على قايد'},
    {id:39,name:'الماجد على اللبان'},
  ];
  cities=[
    {id:1,name:'اهرامات الجيزة'},
    {id:2,name:'محمية وادى الريان'},
    {id:3,name:'وادى الملوك و الملكات'},
    {id:4,name:'الاسكندرية'},
    {id:5,name:'اسوان'},
    {id:6,name:'الاقصر'},
    {id:7,name:'قلعة صلاح الدين الايوبى'},
    {id:8,name:'قلعة محمد على'},
    {id:9,name:'قلعة قايتباى'},
    {id:10,name:'رأس سدر'},
    {id:11,name:'العين السخنة'},
    {id:12,name:'حديقة الحيوان'},
    {id:13,name:'حديقة النباتات'},
    {id:14,name:'معبد الكرنك'},
    {id:15,name:'معبد ابو سنبل'},
  ];
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

  mapJourneyReport(){
    this.journeyReportModel = {
      groupId         : this.journeyReportForm.get('groupId')?.value,
      studentId       : this.journeyReportForm.get('studentId')?.value,
      supervisorId    : this.journeyReportForm.get('supervisorId')?.value,
      journeyDate     : this.journeyReportForm.get('journeyDate')?.value,
      outboundJourney : this.journeyReportForm.get('outboundJourney')?.value,
      returnJourney   : this.journeyReportForm.get('returnJourney')?.value,
    }
  }
  getJourneyReportSubmit(){
    // this.openDialog();
    this.mapJourneyReport();
    alert(`
        groupId         ${this.journeyReportModel.groupId         } ,     
        studentId       ${this.journeyReportModel.studentId       } , 
        supervisorId    ${this.journeyReportModel.supervisorId    } , 
        journeyDate     ${this.journeyReportModel.journeyDate     } , 
        outboundJourney ${this.journeyReportModel.outboundJourney } , 
        returnJourney   ${this.journeyReportModel.returnJourney   } , 
            `);
    if(this.journeyReportForm.valid){
      this.mapJourneyReport();
    }
    this.schoolReportService.getJourneyReport(this.journeyReportModel).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

  mapSupervisorReport(){
    this.supervisorReportModel = {
      groupId         : this.supervisorReportForm.get('groupId')?.value,
      supervisorId    : this.supervisorReportForm.get('supervisorId')?.value,
      journeyDate     : this.supervisorReportForm.get('journeyDate')?.value,
      from   : this.supervisorReportForm.get('from')?.value,
      to   : this.supervisorReportForm.get('to')?.value,
    }
  }
  getSupervisorReportSubmit(){
    this.mapSupervisorReport();
    alert(`
        groupId         ${this.supervisorReportModel.groupId         } ,     
        supervisorId    ${this.supervisorReportModel.supervisorId    } , 
        journeyDate     ${this.supervisorReportModel.journeyDate     } , 
        from ${this.supervisorReportModel.from } , 
        to   ${this.supervisorReportModel.to   } , 
            `);
    if(this.supervisorReportForm.valid){
      this.mapSupervisorReport();
    }
    this.schoolReportService.getSupervisorReport(this.supervisorReportModel).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

  mapAbsentReport(){
    this.absenceReportModel = {
      studentId         : this.absentReportForm.get('studentId')?.value,
      supervisorId    : this.absentReportForm.get('supervisorId')?.value,
      reason     : this.absentReportForm.get('reason')?.value,
      from   : this.absentReportForm.get('from')?.value,
      to   : this.absentReportForm.get('to')?.value,
    }
  }
  getAbsentReportSubmit(){
    this.mapAbsentReport();
    alert(`
       studentId         ${this.absenceReportModel.studentId         } ,     
        supervisorId    ${this.absenceReportModel.supervisorId    } , 
        reason     ${this.absenceReportModel.reason     } , 
        from ${this.absenceReportModel.from } , 
        to   ${this.absenceReportModel.to   } , 
            `);
    if(this.absentReportForm.valid){
      this.mapAbsentReport();
    }
    this.schoolReportService.getAbsenceReport(this.absenceReportModel).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.position = {
      top: `${this.elementRef.nativeElement.offsetTop - 30}px`,
      left: `${this.elementRef.nativeElement.offsetLeft}px`
    };
    const dialogRef: MatDialogRef<PrintPopUpComponent> = this.dialog.open(PrintPopUpComponent, dialogConfig);

    // dialogRef.afterOpened().subscribe(() => {
    //   this.imageSource =
    //  "assets/images/close.svg";
    // });
  
    // dialogRef.afterClosed().subscribe(() => {
    //   this.imageSource =
    //  "assets/images/message.svg";
    // });
  }
  @ViewChild('dialog', { static: true }) set content(content: ElementRef) {
    this.elementRef = content;
  }

}
