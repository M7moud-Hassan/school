import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { DetailsAskComponent } from '../details-ask/details-ask.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./support.component.css']
})
export class SupportComponent {

  isSchoolAccountDropdownVisible:boolean = false;
  
  help_data = [
    {id:1,title:' مشكلة فى حساب المشرف رقم 1',date:'15/6/2013',isSelected:false,status:true,},
    {id:2,title:' مشكلة فى حساب المشرف رقم 2',date:'15/6/2013',isSelected:false,status:true,},
    {id:3,title:' مشكلة فى حساب المشرف رقم 3',date:'15/6/2013',isSelected:false,status:false,},
    {id:4,title:' مشكلة فى حساب المشرف رقم 4',date:'15/6/2013',isSelected:false,status:true,},
    {id:5,title:' مشكلة فى حساب المشرف رقم 5',date:'15/6/2013',isSelected:false,status:true,},
    {id:6,title:' مشكلة فى حساب المشرف رقم 6',date:'15/6/2013',isSelected:false,status:true,},
    {id:7,title:' مشكلة فى حساب المشرف رقم 7',date:'15/6/2013',isSelected:false,status:true,},
    {id:8,title:' مشكلة فى حساب المشرف رقم 8',date:'15/6/2013',isSelected:false,status:false,},
    {id:9,title:' مشكلة فى حساب المشرف رقم 9',date:'15/6/2013',isSelected:false,status:true,},
    {id:10,title:' مشكلة فى حساب المشرف رقم 10',date:'15/6/2013',isSelected:false,status:true,},

    {id:11,title:' مشكلة فى حساب المشرف رقم 11',date:'15/6/2013',isSelected:false,status:true,},
    {id:12,title:' مشكلة فى حساب المشرف رقم 12',date:'15/6/2013',isSelected:false,status:true,},
    {id:13,title:' مشكلة فى حساب المشرف رقم 13',date:'15/6/2013',isSelected:false,status:true,},
    {id:14,title:' مشكلة فى حساب المشرف رقم 14',date:'15/6/2013',isSelected:false,status:true,},
    {id:15,title:' مشكلة فى حساب المشرف رقم 15',date:'15/6/2013',isSelected:false,status:false,},
    {id:16,title:' مشكلة فى حساب المشرف رقم 16',date:'15/6/2013',isSelected:false,status:true,},
    {id:17,title:' مشكلة فى حساب المشرف رقم 17',date:'15/6/2013',isSelected:false,status:true,},
    {id:18,title:' مشكلة فى حساب المشرف رقم 18',date:'15/6/2013',isSelected:false,status:true,},
    {id:19,title:' مشكلة فى حساب المشرف رقم 19',date:'15/6/2013',isSelected:false,status:false,},
    {id:20,title:'مشكلة فى حساب المشرف رقم 20 ',date:'15/6/2013',isSelected:false,status:true,},
    
    {id:21,title:' مشكلة فى حساب المشرف رقم 21',date:'15/6/2013',isSelected:false,status:false,},
    {id:22,title:' مشكلة فى حساب المشرف رقم 22',date:'15/6/2013',isSelected:false,status:true,},
    {id:23,title:' مشكلة فى حساب المشرف رقم 23',date:'15/6/2013',isSelected:false,status:true,},
    {id:24,title:' مشكلة فى حساب المشرف رقم 24',date:'15/6/2013',isSelected:false,status:true,},
    {id:25,title:' مشكلة فى حساب المشرف رقم 25',date:'15/6/2013',isSelected:false,status:true,},
    {id:26,title:' مشكلة فى حساب المشرف رقم 26',date:'15/6/2013',isSelected:false,status:false,},
    {id:27,title:' مشكلة فى حساب المشرف رقم 27',date:'15/6/2013',isSelected:false,status:false,},
    {id:28,title:' مشكلة فى حساب المشرف رقم 28',date:'15/6/2013',isSelected:false,status:false,},
    {id:29,title:' مشكلة فى حساب المشرف رقم 29',date:'15/6/2013',isSelected:false,status:false,},
    {id:30,title:' مشكلة فى حساب المشرف رقم 30',date:'15/6/2013',isSelected:false,status:true,},

    {id:41,title:' مشكلة فى حساب المشرف رقم 41',date:'15/6/2013',isSelected:false,status:true,},
    {id:42,title:' مشكلة فى حساب المشرف رقم 42',date:'15/6/2013',isSelected:false,status:false,},
    {id:43,title:' مشكلة فى حساب المشرف رقم 43',date:'15/6/2013',isSelected:false,status:true,},
    {id:44,title:' مشكلة فى حساب المشرف رقم 44',date:'15/6/2013',isSelected:false,status:false,},
    {id:45,title:' مشكلة فى حساب المشرف رقم 45',date:'15/6/2013',isSelected:false,status:true,},
    {id:46,title:' مشكلة فى حساب المشرف رقم 46',date:'15/6/2013',isSelected:false,status:true,},
    {id:47,title:' مشكلة فى حساب المشرف رقم 47',date:'15/6/2013',isSelected:false,status:true,},
    {id:48,title:' مشكلة فى حساب المشرف رقم 48',date:'15/6/2013',isSelected:false,status:true,},
    {id:49,title:' مشكلة فى حساب المشرف رقم 49',date:'15/6/2013',isSelected:false,status:true,},
    {id:50,title:' مشكلة فى حساب المشرف رقم 50',date:'15/6/2013',isSelected:false,status:false,},
  ];

  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.help_data.length;

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
    this.help_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.help_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.help_data.filter(e=>e.isSelected);
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  openChangeGroupSupervisorDialog(){
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
    this.dialog.open(DetailsAskComponent,{
      width: '50%',
    })
  }
}