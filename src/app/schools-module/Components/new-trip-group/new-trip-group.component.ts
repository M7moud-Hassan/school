import { Component, ElementRef, OnInit } from '@angular/core';
import {  FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { studentSimpleModel } from '../../Services/student.service';

@Component({
  selector: 'app-new-trip-group',
  templateUrl: './new-trip-group.component.html',
  styleUrls: ['./new-trip-group.component.css']
})
export class NewTripGroupComponent implements OnInit {
  students:studentSimpleModel[]=[];
  newTripGroupForm:FormGroup = new FormGroup({});

  constructor(private service:MainService,private elementRef:ElementRef,){}

  ngOnInit(): void {
    this.getStudents();
    this.createForm();
  }

  getStudents(){
    this.students = this.service.studentService.getStudents();
  } 

  createForm(){
   this.newTripGroupForm = this.service.formBuilder.group({
    groupNameAr:['',[Validators.required]],
    groupNameEn:['',[Validators.required]],
    supervisorId:['',[]],
    students:['',[Validators.required]],
    qrCodeStatus:['',[Validators.required]],
  });
  }

  submit(){
    this.service.printFormValues(this.newTripGroupForm);
    this.service.tripsAndGroupsService.addNewTripGroup(this.newTripGroupForm.value).subscribe({
      next:(resonse)=>{

      },
      error:(error)=>{

      }
    })
  }

}
