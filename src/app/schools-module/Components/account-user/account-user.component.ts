import { Component ,AfterViewInit, OnInit} from '@angular/core';
import { ProfileModel } from '../../Core/Models/profile-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { MainService } from '../../Services/main.service';
import { groupSimpleModel } from '../../Services/groups.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css',
  '../new-student/new-student.component.css','../profile/profile.component.css','./account-user.component.css']
})
export class AccountUserComponent implements AfterViewInit,OnInit{
  isDetailsVisable:boolean = true;
  isGroupsVisable:boolean = true;
  isLocationVisable:boolean = true;
  isReturnTripVisable:boolean = false ; 
  isOutboundTripVisable:boolean = false ;
  groups:groupSimpleModel[]=[]; 
  profileForm:FormGroup = new FormGroup({});
  outBoundDays:any[] = [];
  topPosition = 0;
  display = 'none';
  zoom = 5;
  goShow: boolean = false
  goReturn: boolean = false
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };
  constructor(private service:MainService){ }
  ngOnInit(): void {
    this.outBoundDays = [
      {id:0,day:'الـكل',isSelected:false},
      {id:1,day:'السبت',isSelected:false},
      {id:2,day:'الأحد',isSelected:false},
      {id:3,day:'الإثنين',isSelected:false},
      {id:-1,day:'',isSelected:false},
      {id:4,day:'الثلاثاء',isSelected:true},
      {id:5,day:'الأربعاء',isSelected:false},
      {id:6,day:'الخميس',isSelected:false},
    ];
    this.getGroups();
    this.createForm();
    this.getProfileData();
  }
  getGroups(){
    this.groups = this.service.groupService.getGroups();
  }
  ngAfterViewInit(): void {
   setInterval(()=>{
    this.topPosition=-30;
   },100)
  }

  createForm(){
    this.profileForm = this.service.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      name: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      city: ['', [Validators.required]],
      userNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  getProfileData(){
    this.profileForm.patchValue(this.service.studentService.getStudentDataForEdit());
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

  toggleReturn(){
    this.goReturn=!this.goReturn;
  }
  togglegoShow(){
    
    this.goShow=!this.goShow;
    
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Do something with the selected file...
    const reader = new FileReader();
    reader.onload = () => {
      this.profileForm.controls['image'].setValue(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  }
  get getAllSelectedItems(){
    return this.outBoundDays.filter((e:any)=>e.isSelected);
  }
  get getBusColor(){
    return this.profileForm.controls['busColor'].value;
  }
  get getImage(){
    return this.profileForm.controls['image'].value;
  }
  back(){
    this.service.back();
  }
}
