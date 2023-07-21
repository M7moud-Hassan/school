import { Component, ElementRef, OnInit } from '@angular/core';
import { TripsAndGroupsService } from '../../Services/trips-and-groups.service';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JourneyReportModel } from '../../Core/Models/journey-report-model';
import { ChangeSupervisorPopUpComponent } from '../change-supervisor-pop-up/change-supervisor-pop-up.component';
import { AddNewStudentToGroupPopUpComponent } from '../add-new-student-to-group-pop-up/add-new-student-to-group-pop-up.component';


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
  journies= [
    {id:1,groupNameAr:'حى البشر',groupNameEn:'Hi Elbishr',supervisorName:'محمد كمال',studentCount:14,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الكاظم',groupNameEn:'Hi Elkazem',supervisorName:'على خضيرى',studentCount:12,active:true,codeActive:true,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى الهادى',groupNameEn:'Hi Elhadi',supervisorName:'احمد هراس',studentCount:8,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الكافورى',groupNameEn:'Hi Elkafoury',supervisorName:'مصطفى ماجد',studentCount:11,active:true,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الهدى',groupNameEn:'Hi Elhuda',supervisorName:'عبدالعزيز خالد',studentCount:10,active:false,codeActive:true,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى العملين',groupNameEn:'Hi Elalamein',supervisorName:'رجب العريان',studentCount:8,active:true,codeActive:false,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى المنتزه',groupNameEn:'Hi Elmontazah',supervisorName:'منتصر حازم',studentCount:15,active:true,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى خان',groupNameEn:'Hi Khan',supervisorName:'عامر القرنى',studentCount:8,active:true,codeActive:false,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى العمورى',groupNameEn:'Hi Elamoury',supervisorName:'بلال محمد',studentCount:9,active:false,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الرشيد',groupNameEn:'Hi Elrasheed',supervisorName:'على فراج',studentCount:17,active:true,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الراشد',groupNameEn:'Hi Elrashed',supervisorName:'علاء محمود',studentCount:21,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى المعتصم',groupNameEn:'Hi Elmoatasem',supervisorName:'مصطفى عبدالعال',studentCount:8,active:false,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
  ];
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
  studentsNames:string[]=[
    'محمد حسن احمد',
    'خاد مصطفى عبدالجابر',
    'ابراهيم على قايد',
    'السيد احمد محمد',
    'مازن مصطفى على',
    'عبدالله احمد السيد',
    'مراد احمد السيد',
    'فراج على ناصف',
    'المنتصر بالله احمد',
    'رمضان احمد جاد الكريم',
    'محمد السيد على',
    'كمال على مصطفى',
    'المنذر على هاشم',
    'محمد مصطفى هاشم',
    'كمال السيد عباس',
    'حماده احمد حماده',
    'تيمور على البنا',
    'الماجد على اللبان',
    'احمد شريف السيد',
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

  pageNo: number = 1;
  pageSize: number = 8;
  total :number =  this.journies.length;

  searchTripReportModel:JourneyReportModel = {} as JourneyReportModel;
  constructor(private tripsAndGroupsService:TripsAndGroupsService,private fb:FormBuilder,private elementRef:ElementRef,private dialog: MatDialog,){}
  ngOnInit(): void {
    
  }
   
  tripSearchReportForm = this.fb.group({
    studentId:['',[Validators.required]],
    supervisorId:['',[Validators.required]],
    groupId:['',[Validators.required]],
    journeyDate:['',[Validators.required]],
    outboundJourney:[false,[Validators.required]],
    returnJourney:[false,[Validators.required]],
  });

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

  mapSearchTripReportModel(){
    this.searchTripReportModel = {
      groupId         : this.tripSearchReportForm.get('groupId')?.value,
      studentId       : this.tripSearchReportForm.get('studentId')?.value,
      supervisorId    : this.tripSearchReportForm.get('supervisorId')?.value,
      journeyDate     : this.tripSearchReportForm.get('journeyDate')?.value,
      outboundJourney : this.tripSearchReportForm.get('outboundJourney')?.value,
      returnJourney   : this.tripSearchReportForm.get('returnJourney')?.value,
    }
  }
  getJourneyReportSubmit(){
    // this.openDialog();
    this.mapSearchTripReportModel();
    alert(`
        groupId         ${this.searchTripReportModel.groupId         } ,     
        studentId       ${this.searchTripReportModel.studentId       } , 
        supervisorId    ${this.searchTripReportModel.supervisorId    } , 
        journeyDate     ${this.searchTripReportModel.journeyDate     } , 
        outboundJourney ${this.searchTripReportModel.outboundJourney } , 
        returnJourney   ${this.searchTripReportModel.returnJourney   } , 
            `);
    if(this.tripSearchReportForm.valid){
      this.mapSearchTripReportModel();
    }
    this.tripsAndGroupsService.searchTripReport(this.searchTripReportModel).subscribe({
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
    const dialogRef = this.dialog.open(ChangeSupervisorPopUpComponent, {
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
    const dialogRef = this.dialog.open(AddNewStudentToGroupPopUpComponent, {
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
