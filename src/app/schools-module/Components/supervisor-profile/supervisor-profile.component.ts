import { Component, OnInit } from '@angular/core';
import { EditSupervisorModel } from '../../Core/Models/new-supervisor-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupervisorService } from '../../Services/supervisor.service';
import { MainService } from '../../Services/main.service';
import { groupSimpleModel } from '../../Services/groups.service';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css',
  '../new-student/new-student.component.css','../profile/profile.component.css','../account-user/account-user.component.css','./supervisor-profile.component.css']
})
export class SupervisorProfileComponent implements OnInit {
  busColor:string = "#ff0000";
  isDetailsVisable:boolean = true;
  isGroupsVisable:boolean = true;
  isLocationVisable:boolean = true;

  topPosition = 0;
  display = 'none';
  zoom = 5;
  goShow: boolean = false
  goReturn: boolean = false
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };

  isReturnTripVisable:boolean = false ; 
  isOutboundTripVisable:boolean = false ; 
  selectAllDays = false;
  outBoundDays:any = [];
  profileForm:FormGroup = new FormGroup({}); 
  groups:groupSimpleModel[]=[];

  constructor(private service:MainService){}


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
    this.createForm();
    this.getGroups();
    this.getProfileData();
  }

  ngAfterViewInit(): void {
   setInterval(()=>{
    this.topPosition=-30;
   },100)
  }
   createForm(){
    this.profileForm = this.service.formBuilder.group({
      name:['',[Validators.required]],
      nameEn:['',[Validators.required]],
      userNumber:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      busNumber:['',[Validators.required]],
      busType:['',[Validators.required]],
      busColor:['',[Validators.required]],
      group:['',[Validators.required]],
      location:['',[Validators.required]],
      image:['',[Validators.required]],
    });
   }
  
  getGroups(){
    this.groups = this.service.groupService.getGroups();
  }
  
  onSubmit() {
    this.service.printFormValues(this.profileForm);

    if(this.profileForm.valid){
      this.service.supervisorService.editSupervisor(this.profileForm.value).subscribe({
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
  
  
 getProfileData(){
  this.profileForm.patchValue(this.service.supervisorService.getSupervisorDataForEdit());
 }

  toggleSelectAll(){
    this.outBoundDays.forEach((e:any)=>e.isSelected=this.selectAllDays);
  }
  checkBoxChange(_id:any){
    if(this.isAllCheckboxSelected()) this.selectAllDays=true;
    else {
      this.selectAllDays=false;
      this.outBoundDays.maps((d:any)=>{
        if(d.id==_id){
          d.isSelected = !d.isSelected ;
        }
      })
    }
  }
  isAllCheckboxSelected(){
    return this.outBoundDays.every((e:any)=>e.isSelected==true);
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
