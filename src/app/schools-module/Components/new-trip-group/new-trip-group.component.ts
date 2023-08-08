import { Component, ElementRef, OnInit } from '@angular/core';
import {  FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { studentSimpleModel } from '../../Services/student.service';

@Component({
  selector: 'app-new-trip-group',
  templateUrl: './new-trip-group.component.html',
  // styleUrls: ['../login/login.component.css', '../register/register.component.css','../profile/profile.component.css','../new-student/new-student.component.css','../details-ads/details-ads.component.css','./new-trip-group.component.css']
  styleUrls: ['./new-trip-group.component.css','../login/login.component.css', '../register/register.component.css','../profile/profile.component.css','../new-student/new-student.component.css','../details-ads/details-ads.component.css']
})
export class NewTripGroupComponent implements OnInit {
  students:any[] = [];
  newTripGroupForm:FormGroup = new FormGroup({});

  constructor(private service:MainService,private elementRef:ElementRef,){}

  ngOnInit(): void {
    // this.getStudents();
    this.createForm();
    this.loadData();
  }

  // getStudents(){
  //   this.students = this.service.studentService.getStudents();
  // } 

  createForm(){
   this.newTripGroupForm = this.service.formBuilder.group({
    groupNameAr:['',[Validators.required]],
    groupNameEn:['',[Validators.required]],
    supervisor:['',[]],
    qrCodeStatus:['',[Validators.required]],
  });
  }
  loadData(){
    let model = this.service.tripsAndGroupsService.getGroupDetailsData();
    this.students = model.students;
    this.newTripGroupForm.patchValue(model);
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

  removeStudent(id:any){
    this.students.map(x => {
       if(x.id == id){
        x.isDeleted = true;
       }
      });
  }

}
