import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectGroupsComponent } from '../select-groups/select-groups.component';
import { DetailsStudentComponent } from '../details-student/details-student.component';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import { LocationComponent } from '../location/location.component';
import { StudentPasswordComponent } from '../student-password/student-password.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css','../parents-list/parents-list.component.css']
})
export class StudentListComponent {
  isSchoolAccountDropdownVisible:boolean = false;

  
  constructor(private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,
    private viewContainerRef: ViewContainerRef,private dialog: MatDialog) {

    
  }
  student_data = [
    {id:1,name:'طالب رقم 1',groupName:'مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:2,name:'طالب رقم 2',groupName:'مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:3,name:'طالب رقم 3',groupName:'مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:4,name:'طالب رقم 4',groupName:'مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:5,name:'طالب رقم 5',groupName:'مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:6,name:'طالب رقم 6',groupName:'مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:7,name:'طالب رقم 7',groupName:'مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:8,name:'طالب رقم 8',groupName:'مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:9,name:'طالب رقم 9',groupName:'مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:10,name:'طالب رقم 10',groupName:'مجموعة رقم 10',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:11,name:'1طالب رقم 1',groupName:'1مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:12,name:'1طالب رقم 2',groupName:'1مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:13,name:'1طالب رقم 3',groupName:'1مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:14,name:'1طالب رقم 4',groupName:'1مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:15,name:'1طالب رقم 5',groupName:'1مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:16,name:'1طالب رقم 6',groupName:'1مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:17,name:'1طالب رقم 7',groupName:'1مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:18,name:'1طالب رقم 8',groupName:'1مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:19,name:'1طالب رقم 9',groupName:'1مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:20,name:'طالب رقم 20',groupName:'مجموعة رقم 20',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:21,name:'2طالب رقم 1',groupName:'2مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:22,name:'2طالب رقم 2',groupName:'2مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:23,name:'2طالب رقم 3',groupName:'2مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:24,name:'2طالب رقم 4',groupName:'2مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:25,name:'2طالب رقم 5',groupName:'2مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:26,name:'2طالب رقم 6',groupName:'2مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:27,name:'2طالب رقم 7',groupName:'2مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:28,name:'2طالب رقم 8',groupName:'2مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:29,name:'2طالب رقم 9',groupName:'2مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:30,name:'طالب رقم 30',groupName:'مجموعة رقم 30',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:31,name:'3طالب رقم 1',groupName:'3مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:32,name:'3طالب رقم 2',groupName:'3مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:33,name:'3طالب رقم 3',groupName:'3مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:34,name:'3طالب رقم 4',groupName:'3مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:35,name:'3طالب رقم 5',groupName:'3مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:36,name:'3طالب رقم 6',groupName:'3مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:37,name:'3طالب رقم 7',groupName:'3مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:38,name:'3طالب رقم 8',groupName:'3مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:39,name:'3طالب رقم 9',groupName:'3مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:40,name:'طالب رقم 40',groupName:'مجموعة رقم 40',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:41,name:'4طالب رقم 1',groupName:'4مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:42,name:'4طالب رقم 2',groupName:'4مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:43,name:'4طالب رقم 3',groupName:'4مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:44,name:'4طالب رقم 4',groupName:'4مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:45,name:'4طالب رقم 5',groupName:'4مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:46,name:'4طالب رقم 6',groupName:'4مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:47,name:'4طالب رقم 7',groupName:'4مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:48,name:'4طالب رقم 8',groupName:'4مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:49,name:'4طالب رقم 9',groupName:'4مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:50,name:'طالب رقم 50',groupName:'مجموعة رقم 50',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
  ];

  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.student_data.length;

  selectAll:boolean = false;
  
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

  detailsVisible: boolean[] = [false, false, false];

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.student_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.student_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.student_data.filter(e=>e.isSelected);
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }

  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;

  overlayRef: OverlayRef | null = null;

  openDialogSelectGroup(){
    const dialogRef = this.dialog.open(SelectGroupsComponent, {
      width: '50%',
    });
  }

  openDialogDetailsStudent(){
    const dialogRef = this.dialog.open(DetailsStudentComponent, {
      width: '50%',
    });
  }

  deleteDialog(){
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '50%',
    });
  }
  locationDialog(){
    const dialogRef = this.dialog.open(LocationComponent, {
      width: '50%',
    });
  }
  passwordStudentDialog(){
    const dialogRef = this.dialog.open(StudentPasswordComponent, {
      width: '50%',
    });
  }
  showOverlay() {
    this.isSchoolAccountDropdownVisible = !this.isSchoolAccountDropdownVisible;
    if (!this.overlayRef) {
      const positionStrategy = this.overlayPositionBuilder
        .flexibleConnectedTo(this.trigger.nativeElement)
        .withPositions([{ originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' }]);
      this.overlayRef = this.overlay.create({ positionStrategy });
    }

    const portal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  hideOverlay() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}