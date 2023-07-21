import { Component ,AfterViewInit} from '@angular/core';
import { ProfileModel } from '../../Core/Models/profile-model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css',
  '../new-student/new-student.component.css','../profile/profile.component.css','./account-user.component.css']
})
export class AccountUserComponent implements AfterViewInit{
  profileModel:ProfileModel = {} as ProfileModel;
  topPosition=0;
  display='none'
  goShow:boolean=false
  goReturn:boolean=false
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng:  48.39095806484077
};
zoom=5
  constructor(private fb:FormBuilder,private authService:AuthService){
  }
  ngAfterViewInit(): void {
   setInterval(()=>{
    this.topPosition=-30;
   },100)
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

  toggleReturn(){
    this.goReturn=!this.goReturn;
  }
  togglegoShow(){
    
    this.goShow=!this.goShow;
    
  }
}
