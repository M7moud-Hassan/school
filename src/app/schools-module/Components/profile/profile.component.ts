import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileModel } from '../../Core/Models/profile-model';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css','./profile.component.css']
})
export class ProfileComponent {
  profileModel:ProfileModel = {} as ProfileModel;
  constructor(private fb:FormBuilder,private authService:AuthService){

  }

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    name: ['', [Validators.required]],
    nameEn: ['', [Validators.required]],
    userNumber: ['', [Validators.required]],
    address: ['', [Validators.required]],
    location: ['', [Validators.required]],
  });
  
  mapValues(){
    this.profileModel = {
      name : this.profileForm.controls['name'].value,
      nameEn : this.profileForm.controls['nameEn'].value,
      email : this.profileForm.controls['email'].value,
      userNumber : this.profileForm.controls['userNumber'].value,
      phone : this.profileForm.controls['phone'].value,
      address : this.profileForm.controls['address'].value,
      location : this.profileForm.controls['location'].value,
    }
  }
  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    userNumber : ${this.profileModel.userNumber},
    email : ${this.profileModel.email},
    phone : ${this.profileModel.phone},
    name : ${this.profileModel.name},
    nameEn : ${this.profileModel.nameEn},
    location : ${this.profileModel.location},
    address : ${this.profileModel.address},
    `)

    if(this.profileForm.valid){
      this.mapValues();
      this.authService.profile(this.profileModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
}
