import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-admin-management-information-system',
  templateUrl: './admin-management-information-system.component.html',
  styleUrls: ['./admin-management-information-system.component.css']
})
export class AdminManagementInformationSystemComponent implements OnInit {
  profileForm:FormGroup = new FormGroup({});
  // userImage:any = "assets/images/userAccount.jpg";

  topPosition = 0;
  display = 'none'
  goShow: boolean = false
  goReturn: boolean = false
  zoom = 5
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };
  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.createForm();
    this.getProfileData();
    // this.userImage = this.profileForm.controls['image'].value ?? this.userImage 
  }
  createForm(){
    this.profileForm = this.service.formBuilder.group({
      image:['',[Validators.required]],
      siteName:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],
      facebook:['',[Validators.required]],
      twitter:['',[Validators.required]],
      whatsApp:['',[Validators.required]],
      telegram:['',[Validators.required]],
      instagram:['',[Validators.required]],
      snapChat:['',[Validators.required]],
      location:['',[Validators.required]],
      SMTPUserName:['',[Validators.required]],
      SMTPPassword:['',[Validators.required]],
      SMTPHostorIP:['',[Validators.required]],
      SMTPPort:['',[Validators.required]],
      googlePlay:['',[Validators.required]],
      itunesApple:['',[Validators.required]],
    });
  }
  getProfileData(){
    let model = this.service.adminManagementService.getAdminManagementProfile();
    this.profileForm.patchValue(model);
  }


  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.userImage = URL.createObjectURL(file);
  //   };
  //   reader.readAsDataURL(file);
  //   this.profileForm.controls['image'].setValue(this.userImage);
  // }
  
  onSubmit() {
    this.service.printFormValues(this.profileForm);
    if(this.profileForm.valid){
      this.service.adminManagementService.Editprofile(this.profileForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
}
