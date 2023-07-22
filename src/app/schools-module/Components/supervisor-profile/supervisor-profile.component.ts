import { Component, OnInit } from '@angular/core';
import { EditSupervisorModel } from '../../Core/Models/new-supervisor-model';
import { FormBuilder, Validators } from '@angular/forms';
import { SupervisorService } from '../../Services/supervisor.service';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css',
  '../new-student/new-student.component.css','../profile/profile.component.css','../account-user/account-user.component.css','./supervisor-profile.component.css']
})
// '../school-account-details/school-account-details.component.css',
export class SupervisorProfileComponent implements OnInit {
  busColor:string = "#ff0000";
  isDetailsVisable:boolean = true;
  isGroupsVisable:boolean = true;
  isLocationVisable:boolean = true;

  
  isReturnTripVisable:boolean = false ; 
  isOutboundTripVisable:boolean = false ; 

  outBoundDays:any = [];
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
  }

  profileModel:EditSupervisorModel = {} as EditSupervisorModel;
  topPosition=0;
  display='none'
  goShow:boolean=false
  goReturn:boolean=false
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng:  48.39095806484077
};
zoom=5
  constructor(private fb:FormBuilder,private supervisorService:SupervisorService){
  }
  
  ngAfterViewInit(): void {
   setInterval(()=>{
    this.topPosition=-30;
   },100)
  }

  profileForm = this.fb.group({
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
  
  mapValues(){
    this.profileModel = {
      name : this.profileForm.controls['name'].value,
      nameEn : this.profileForm.controls['nameEn'].value,
      email : this.profileForm.controls['email'].value,
      userNumber : this.profileForm.controls['userNumber'].value,
      phone : this.profileForm.controls['phone'].value,
      address : this.profileForm.controls['address'].value,
      location : this.profileForm.controls['location'].value,
      busColor : this.profileForm.controls['busColor'].value,
      busNumber : this.profileForm.controls['busNumber'].value,
      busType : this.profileForm.controls['busType'].value,
      city : this.profileForm.controls['city'].value,
      group : this.profileForm.controls['group'].value,
      image : this.profileForm.controls['image'].value,
    }
  }
  groups=[
    {id:1,name:'المجموعة الاولى'},
    {id:3,name:'المجموعة الثانية'},
    {id:2,name:'المجموعة الثالثة'},
    {id:4,name:'المجموعة الرابعة'},
    {id:5,name:'المجموعة الخامسة'},
    {id:6,name:'المجموعة السادسة'},
    {id:7,name:'المجموعة السابعة'},
    {id:8,name:'المجموعة الثامنة'},
    {id:9,name:'المجموعة التاسعه'},
    {id:10,name:'المجموعة العاشرة'},
  ];
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
      this.supervisorService.editSupervisor(this.profileModel).subscribe({
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
  }
  
  selectAllDays = false;
 

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

}
