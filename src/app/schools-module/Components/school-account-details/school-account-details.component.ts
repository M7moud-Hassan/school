import { Component } from '@angular/core';
import { SchoolAccountDetailsModel } from '../../Core/Models/school-account-details-model';
import { FormBuilder, Validators } from '@angular/forms';
import { SchoolService } from '../../Services/school.service';

@Component({
  selector: 'app-school-account-details',
  templateUrl: './school-account-details.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css','./school-account-details.component.css']
})
export class SchoolAccountDetailsComponent {
  schoolAccountDetailsModel:SchoolAccountDetailsModel = {} as SchoolAccountDetailsModel;
  constructor(private fb:FormBuilder,private schoolService:SchoolService){

  }

  profileForm = this.fb.group({
    nameAr: ['', [Validators.required]],
    nameEn: ['', [Validators.required]],
    userNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    schoolLocation: ['', [Validators.required]],
    image: ['', []],
  });
  
  mapValues(){
    this.schoolAccountDetailsModel = {
      nameAr : this.profileForm.controls['nameAr'].value,
      nameEn : this.profileForm.controls['nameEn'].value,
      userNumber : this.profileForm.controls['userNumber'].value,
      email : this.profileForm.controls['email'].value,
      phone : this.profileForm.controls['phone'].value,
      address : this.profileForm.controls['address'].value,
      schoolLocation : this.profileForm.controls['schoolLocation'].value,
      image : this.profileForm.controls['image'].value,
    }
  }
  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    userNumber : ${this.schoolAccountDetailsModel.userNumber},
    email : ${this.schoolAccountDetailsModel.email},
    phone : ${this.schoolAccountDetailsModel.phone},
    name : ${this.schoolAccountDetailsModel.nameAr},
    nameEn : ${this.schoolAccountDetailsModel.nameEn},
    location : ${this.schoolAccountDetailsModel.schoolLocation},
    address : ${this.schoolAccountDetailsModel.address},
    `)

    if(this.profileForm.valid){
      this.mapValues();
      this.schoolService.updateSchoolAccount(this.schoolAccountDetailsModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Do something with the selected file...
  }
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };
  zoom = 5 ;
}
