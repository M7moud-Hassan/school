import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-group-popup',
  templateUrl: './group-popup.component.html',
  styleUrls: ['./group-popup.component.css']
})
export class GroupPopupComponent {


  groups=[
    {id:1,name:'المجموعة الاولى',isChecked:false},
    {id:3,name:'المجموعة الثانية',isChecked:false},
    {id:2,name:'المجموعة الثالثة',isChecked:false},
    {id:4,name:'المجموعة الرابعة',isChecked:false},
    {id:5,name:'المجموعة الخامسة',isChecked:false},
    {id:6,name:'المجموعة السادسة',isChecked:false},
    {id:7,name:'المجموعة السابعة',isChecked:false},
    {id:8,name:'المجموعة الثامنة',isChecked:false},
    {id:9,name:'المجموعة التاسعه',isChecked:false},
    {id:10,name:'المجموعة العاشرة',isChecked:false},
  ];

  checkBoxChange(id:any){
    // this.groups.
  }
  isAllCheckboxSelected(){
    // return this.student_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.groups.filter(e=>e.isChecked);
  }

  constructor(public dialogRef: MatDialogRef<GroupPopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
