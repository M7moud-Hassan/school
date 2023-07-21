import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { DetailsAskComponent } from '../details-ask/details-ask.component';
import { ShowNotificationComponent } from '../show-notification/show-notification.component';
import { SendDialogComponent } from '../send-dialog/send-dialog.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./notifications.component.css']
})
export class NotificationsComponent {
  isSchoolAccountDropdownVisible:boolean = false;
  
  supervisor_data = [
    {id:1,name:'مشرف رقم 1',phoneNumber:'01987373873731',groupName:'المجموعة رقم 1',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:2,name:'مشرف رقم 2',phoneNumber:'01987373873831',groupName:'المجموعة رقم 2',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:3,name:'مشرف رقم 3',phoneNumber:'01987373873791',groupName:'المجموعة رقم 3',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:4,name:'مشرف رقم 4',phoneNumber:'01987373873721',groupName:'المجموعة رقم 4',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:5,name:'مشرف رقم 5',phoneNumber:'01987373873231',groupName:'المجموعة رقم 5',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:6,name:'مشرف رقم 6',phoneNumber:'01987373873431',groupName:'المجموعة رقم 6',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:7,name:'مشرف رقم 7',phoneNumber:'01987373873901',groupName:'المجموعة رقم 7',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:8,name:'مشرف رقم 8',phoneNumber:'01987373873101',groupName:'المجموعة رقم 8',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:9,name:'مشرف رقم 9',phoneNumber:'01987373873873',groupName:'المجموعة رقم 9',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:10,name:'مشرف رقم 10',phoneNumber:'01987373873878',groupName:'المجموعة رقم 10',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    
    {id:11,name:'1مشرف رقم 1',phoneNumber:'01987373873731',groupName:'المجموعة رقم 11',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:12,name:'1مشرف رقم 2',phoneNumber:'01987373873831',groupName:'المجموعة رقم 12',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:13,name:'1مشرف رقم 3',phoneNumber:'01987373873791',groupName:'المجموعة رقم 13',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:14,name:'1مشرف رقم 4',phoneNumber:'01987373873721',groupName:'المجموعة رقم 14',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:15,name:'1مشرف رقم 5',phoneNumber:'01987373873231',groupName:'المجموعة رقم 15',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:16,name:'1مشرف رقم 6',phoneNumber:'01987373873431',groupName:'المجموعة رقم 16',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:17,name:'1مشرف رقم 7',phoneNumber:'01987373873901',groupName:'المجموعة رقم 17',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:18,name:'1مشرف رقم 8',phoneNumber:'019873738731031',groupName:'المجموعة رقم 18',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:19,name:'1مشرف رقم 9',phoneNumber:'01987373873873',groupName:'المجموعة رقم 19',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:20,name:'مشرف رقم 20',phoneNumber:'01987373873878',groupName:'المجموعة رقم 20',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},

    {id:21,name:'2مشرف رقم 1',phoneNumber:'01987373873731',groupName:'المجموعة رقم 21',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:22,name:'2مشرف رقم 2',phoneNumber:'01987373873831',groupName:'المجموعة رقم 22',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:23,name:'2مشرف رقم 3',phoneNumber:'01987373873791',groupName:'المجموعة رقم 23',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:24,name:'2مشرف رقم 4',phoneNumber:'01987373873721',groupName:'المجموعة رقم 24',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:25,name:'2مشرف رقم 5',phoneNumber:'01987373873231',groupName:'المجموعة رقم 25',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:26,name:'2مشرف رقم 6',phoneNumber:'01987373873431',groupName:'المجموعة رقم 26',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:27,name:'2مشرف رقم 7',phoneNumber:'01987373873901',groupName:'المجموعة رقم 27',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:28,name:'2مشرف رقم 8',phoneNumber:'01987373873103',groupName:'المجموعة رقم 81',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:29,name:'2مشرف رقم 9',phoneNumber:'01987373873873',groupName:'المجموعة رقم 28',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:20,name:'مشرف رقم 20',phoneNumber:'01987373873878',groupName:'المجموعة رقم 29',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
  ];

  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.supervisor_data.length;

  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];
  constructor(private dialog: MatDialog) {}

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.supervisor_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.supervisor_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.supervisor_data.filter(e=>e.isSelected);
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  openSelectGroupDialog(){
    this.openDialog();
  }
  openDialog() {
    const dialogRef = this.dialog.open(GroupPopupComponent, {
      width: '50%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
      data: { name: 'Angular Material' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }

  openDialogDetails(){
    this.dialog.open(ShowNotificationComponent,{
      width: '50%',
    })
  }

  openDialogSend(){
    this.dialog.open(SendDialogComponent,{
      width: '50%',
     
    })
  }
}
