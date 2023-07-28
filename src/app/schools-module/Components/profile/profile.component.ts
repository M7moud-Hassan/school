import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileModel } from '../../Core/Models/profile-model';
import { AuthService } from '../../Services/auth.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css','./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup = new FormGroup({});
  userImage:any = "assets/images/userAccount.jpg";

  topPosition = 0;
  display = 'none'
  goShow: boolean = false
  goReturn: boolean = false
  zoom = 5
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };

  constructor(private service:MainService){}
  ngOnInit(): void {
    this.createForm();
    this.getSchoolProfileData();
    this.userImage = this.profileForm.controls['image'].value ?? this.userImage 
  }
  createForm(){
    this.profileForm = this.service.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      name: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      userNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  getSchoolProfileData(){
    let model = this.service.schoolService.getSchoolProfile();
    this.profileForm.patchValue(model);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.userImage = URL.createObjectURL(file);
    };
    reader.readAsDataURL(file);
    this.profileForm.controls['image'].setValue(this.userImage);
  }
  
  onSubmit() {
    this.service.printFormValues(this.profileForm);
    if(this.profileForm.valid){
      this.service.schoolService.Editprofile(this.profileForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
}
