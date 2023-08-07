import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['../edit-supervisor-pop-up/edit-supervisor-pop-up.component.css','./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  profileForm:FormGroup=new FormGroup({});

  constructor(private service:MainService,public dialogRef: MatDialogRef<DetailsStudentComponent>){}

  closeDialog(): void {
    this.dialogRef.close();
  }
  loadStudentData(){
    this.profileForm.patchValue(this.service.studentService.getStudentDetails());
  }

  ngOnInit(): void {
    this.createForm();
    this.loadStudentData();
  }

  createForm(){
    this.profileForm = this.service.formBuilder.group({
      name:['',[Validators.required]],
      nameEn:['',[Validators.required]],
      userNumber:['',[Validators.required]],
      email:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[]],
      phone:['',[Validators.required]],
      group:['',[Validators.required]],
      image:['',[]],
    });
  }
   
  get getName() {
    return this.profileForm.controls['name'].value;
  }
  get getNameEn() {
    return this.profileForm.controls['nameEn'].value;
  }
  get getImage() {
    return this.profileForm.controls['image'].value;
  }



}
