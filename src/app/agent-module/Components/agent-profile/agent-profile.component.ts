import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
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

  constructor(private service:MainAgentService){}
  ngOnInit(): void {
    this.createForm();
    this.getSchoolProfileData();
    this.userImage = this.profileForm.controls['image'].value ?? this.userImage 
  }
  createForm(){
    this.profileForm = this.service.formBuilder.group({
      name: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      userNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
  getSchoolProfileData(){
    let model = this.service.agentAuthService.getSchoolProfile();
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
      this.service.agentAuthService.Editprofile(this.profileForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
}
