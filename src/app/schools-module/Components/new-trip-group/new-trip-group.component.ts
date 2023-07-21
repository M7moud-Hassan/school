import { Component, ElementRef } from '@angular/core';
import { NewTripGroupModel } from '../../Core/Models/new-trip-group-model';
import { FormBuilder, Validators } from '@angular/forms';
import { TripsAndGroupsService } from '../../Services/trips-and-groups.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-trip-group',
  templateUrl: './new-trip-group.component.html',
  styleUrls: ['./new-trip-group.component.css']
})
export class NewTripGroupComponent {

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
   
  newTripGroupModel:NewTripGroupModel = {} as NewTripGroupModel;
  constructor(private tripsAndGroupsService:TripsAndGroupsService,private fb:FormBuilder,private elementRef:ElementRef,private dialog: MatDialog,){}
  newTripGroupForm = this.fb.group({
    groupNameAr:['',[Validators.required]],
    groupNameEn:['',[Validators.required]],
    supervisorId:['',[]],
    students:['',[Validators.required]],
    qrCodeStatus:['',[Validators.required]],
  });
  mapMewTripGroupModel(){
    this.newTripGroupModel = {
      groupNameAr:this.newTripGroupForm.controls['groupNameAr'].value,
      groupNameEn:this.newTripGroupForm.controls['groupNameEn'].value,
      supervisorId:this.newTripGroupForm.controls['supervisorId'].value,
      students:this.newTripGroupForm.controls['students'].value,
      qrCodeStatus:this.newTripGroupForm.controls['qrCodeStatus'].value,
    }
  }
  submit(){
    // this.openDialog();
    this.mapMewTripGroupModel();
    alert(`
    groupNameAr  ${this.newTripGroupModel.groupNameAr} ,
    groupNameEn  ${this.newTripGroupModel.groupNameEn} ,
    supervisorId  ${this.newTripGroupModel.supervisorId} ,
    students  ${this.newTripGroupModel.students} ,
    qrCodeStatus  ${this.newTripGroupModel.qrCodeStatus} ,
            `);
    if(this.newTripGroupForm.valid){
      this.mapMewTripGroupModel();
    }
    this.tripsAndGroupsService.addNewTripGroup(this.newTripGroupModel).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

}
