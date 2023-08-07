import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-supervisor-pop-up',
  templateUrl: './edit-supervisor-pop-up.component.html',
  styleUrls: ['./edit-supervisor-pop-up.component.css']
})
export class EditSupervisorPopUpComponent implements OnInit {
  editSupervisorForm:FormGroup=new FormGroup({});

  constructor(private service:MainService,public dialogRef: MatDialogRef<EditSupervisorPopUpComponent>){}


  closeDialog(): void {
    this.dialogRef.close();
  }
  getSupervisorData(){
    this.editSupervisorForm.patchValue(this.service.supervisorService.getSupervisorData());
  }

  ngOnInit(): void {
    this.createForm();
    this.getSupervisorData();
  }

  createForm(){
    this.editSupervisorForm = this.service.formBuilder.group({
      userNumber:['',[Validators.required]],
      name:['',[Validators.required]],
      nameEn:['',[Validators.required]],
      email:['',[Validators.required]],
      address:['',[Validators.required]],
      password:['',[]],
      group:['',[]],
      phone:['',[Validators.required]],
      busNumber:['',[Validators.required]],
      manufacturingCompany:['',[Validators.required]],
      busColor:['',[Validators.required]],
      image:['',[]],
    });
  }
   
  get getName() {
    return this.editSupervisorForm.controls['name'].value;
  }
  get getNameEn() {
    return this.editSupervisorForm.controls['nameEn'].value;
  }
  get getImage() {
    return this.editSupervisorForm.controls['image'].value;
  }
  get getBusColcor() {
    return this.editSupervisorForm.controls['busColor'].value;
  }

}
