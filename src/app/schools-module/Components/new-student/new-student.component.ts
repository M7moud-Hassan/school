import { Component } from '@angular/core';
import { NewStudentModel } from '../../Core/Models/new-student-model';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['../register/register.component.css','../login/login.component.css',
'../profile/profile.component.css','./new-student.component.css']
})
export class NewStudentComponent {
  newStudentModelModel:NewStudentModel = {} as NewStudentModel;
  constructor(private fb:FormBuilder,private authService:AuthService){

  }

  newStudentModelForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    name: ['', [Validators.required]],
    nameEn: ['', [Validators.required]],
    userNumber: ['', [Validators.required]],
    address: ['', [Validators.required]],
    homeLocation: ['', [Validators.required]],
    password: ['', [Validators.required]],
    returnJourney: [true, [Validators.required]],
    outboundJourney: [false, [Validators.required]],
  });
   
  get returnJourney(){
    return this.newStudentModelForm.controls['returnJourney'].value;
  }

  get outboundJourney(){
    return this.newStudentModelForm.controls['outboundJourney'].value;
  }

  mapValues(){
    this.newStudentModelModel = {
      name : this.newStudentModelForm.controls['name'].value,
      nameEn : this.newStudentModelForm.controls['nameEn'].value,
      email : this.newStudentModelForm.controls['email'].value,
      userNumber : this.newStudentModelForm.controls['userNumber'].value,
      address : this.newStudentModelForm.controls['address'].value,
      homeLocation : this.newStudentModelForm.controls['homeLocation'].value,
      password : this.newStudentModelForm.controls['password'].value,
      outboundJourney : this.newStudentModelForm.controls['outboundJourney'].value,
      returnJourney : this.newStudentModelForm.controls['returnJourney'].value,
    }
  }
  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    userNumber : ${this.newStudentModelModel.userNumber},
    email : ${this.newStudentModelModel.email},
    password : ${this.newStudentModelModel.password},
    name : ${this.newStudentModelModel.name},
    nameEn : ${this.newStudentModelModel.nameEn},
    home location : ${this.newStudentModelModel.homeLocation},
    address : ${this.newStudentModelModel.address},
    outboundJourney : ${this.newStudentModelModel.outboundJourney},
    returnJourney : ${this.newStudentModelModel.returnJourney},
    `)

    if(this.newStudentModelForm.valid){
      this.mapValues();
      this.authService.addNewStudent(this.newStudentModelModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }

}
