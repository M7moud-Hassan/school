import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewSupervisorModel } from '../../Core/Models/new-supervisor-model';
import { SupervisorService } from '../../Services/supervisor.service';

@Component({
  selector: 'app-edit-supervisor-pop-up',
  templateUrl: './edit-supervisor-pop-up.component.html',
  styleUrls: ['./edit-supervisor-pop-up.component.css']
})
export class EditSupervisorPopUpComponent implements OnInit {
  editSupervisorForm:FormGroup=new FormGroup({});
  groups = [
    {id:1,name:'المجموعة رقم 1'},
    {id:2,name:'المجموعة رقم 2'},
    {id:3,name:'المجموعة رقم 3'},
    {id:4,name:'المجموعة رقم 4'},
    {id:5,name:'المجموعة رقم 5'},
    {id:6,name:'المجموعة رقم 6'},
    {id:7,name:'المجموعة رقم 7'},
    {id:8,name:'المجموعة رقم 8'},
    {id:9,name:'المجموعة رقم 9'},
    {id:10,name:'المجموعة رقم 10'},
    {id:11,name:'المجموعة رقم 11'},
    {id:12,name:'المجموعة رقم 12'},
    {id:13,name:'المجموعة رقم 13'},
    {id:14,name:'المجموعة رقم 14'},
    {id:15,name:'المجموعة رقم 15'},
    {id:16,name:'المجموعة رقم 16'}
  ];

  companies = [
    {id:1,name:'الشركة رقم 1'},
    {id:2,name:'الشركة رقم 2'},
    {id:3,name:'الشركة رقم 3'},
    {id:4,name:'الشركة رقم 4'},
    {id:5,name:'الشركة رقم 5'},
    {id:6,name:'الشركة رقم 6'},
    {id:7,name:'الشركة رقم 7'},
    {id:8,name:'الشركة رقم 8'},
    {id:9,name:'الشركة رقم 9'},
    {id:10,name:'الشركة رقم 10'},
    {id:11,name:'الشركة رقم 11'},
    {id:12,name:'الشركة رقم 12'},
    {id:13,name:'الشركة رقم 13'},
    {id:14,name:'الشركة رقم 14'},
    {id:15,name:'الشركة رقم 15'},
    {id:16,name:'الشركة رقم 16'}
  ];

  busColorValue = '#563d7c';
  editSupervisorModel:NewSupervisorModel = {
    name:'محمود السيد',
    nameEn : 'Mahmoud Elsayed',
    address : 'Cairo',
    busColor : '#00ff00',
    busNumber : '6751',
    email:'m782627@gmail.com',
    group:'',
    image:'/assets/images/userAccount.jpg',
    manufacturingCompany:this.companies[3].name,
    phone:'+02893378373',
    userNumber : '8767227627',
    password:''
  };
  constructor(private fb:FormBuilder,private supervisorService:SupervisorService){

  }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.editSupervisorForm = this.fb.group({
      userNumber:[this.editSupervisorModel.userNumber,[Validators.required]],
      name:[this.editSupervisorModel.name,[Validators.required]],
      nameEn:[this.editSupervisorModel.nameEn,[Validators.required]],
      email:[this.editSupervisorModel.email,[Validators.required]],
      address:[this.editSupervisorModel.address,[Validators.required]],
      password:[this.editSupervisorModel.password,[]],
      group:[this.editSupervisorModel.group,[]],
      phone:[this.editSupervisorModel.phone,[Validators.required]],
      busNumber:[this.editSupervisorModel.busNumber,[Validators.required]],
      manufacturingCompany:[this.editSupervisorModel.manufacturingCompany,[Validators.required]],
      busColor:[this.editSupervisorModel.busColor,[Validators.required]],
      image:[this.editSupervisorModel.image,[]],
    });
  }

  
  
   
  mapValues(){
    this.editSupervisorModel = {
      userNumber:this.editSupervisorForm.controls['userNumber'].value,
      name:this.editSupervisorForm.controls['name'].value,
      nameEn:this.editSupervisorForm.controls['nameEn'].value,
      email:this.editSupervisorForm.controls['email'].value,
      address:this.editSupervisorForm.controls['address'].value,
      password:this.editSupervisorForm.controls['password'].value,
      group:this.editSupervisorForm.controls['group'].value,
      phone:this.editSupervisorForm.controls['phone'].value,
      busNumber:this.editSupervisorForm.controls['busNumber'].value,
      manufacturingCompany:this.editSupervisorForm.controls['manufacturingCompany'].value,
      busColor:this.editSupervisorForm.controls['busColor'].value,
      image:this.editSupervisorForm.controls['image'].value,
    }
  }
   


  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    userNumber: ${this.editSupervisorModel.userNumber},
    name: ${this.editSupervisorModel.name},
    nameEn: ${this.editSupervisorModel.nameEn},
    email: ${this.editSupervisorModel.email},
    phone: ${this.editSupervisorModel.phone},
    address: ${this.editSupervisorModel.address},
    password: ${this.editSupervisorModel.password},
    image: ${this.editSupervisorModel.image},
    group: ${this.editSupervisorModel.group},
    busNumber: ${this.editSupervisorModel.busNumber},
    manufacturingCompany: ${this.editSupervisorModel.manufacturingCompany},
    busColor: ${this.editSupervisorModel.busColor},
    `)

    if(this.editSupervisorForm.valid){
      this.mapValues();
      this.supervisorService.editBus(this.editSupervisorModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
}
