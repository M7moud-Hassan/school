import { Component } from '@angular/core';
import { NewSupervisorModel } from '../../Core/Models/new-supervisor-model';
import { FormBuilder, Validators } from '@angular/forms';
import { SupervisorService } from '../../Services/supervisor.service';

@Component({
  selector: 'app-new-supervisor',
  templateUrl: './new-supervisor.component.html',
  styleUrls: ['../new-student/new-student.component.css','./new-supervisor.component.css']
})
export class NewSupervisorComponent {
  busColorValue = '#563d7c';
  newSupervisorModel:NewSupervisorModel = {} as NewSupervisorModel;
  constructor(private fb:FormBuilder,private supervisorService:SupervisorService){

  }

  newSupervisorForm = this.fb.group({
    userNumber:['',[Validators.required]],
    name:['',[Validators.required]],
    nameEn:['',[Validators.required]],
    email:['',[Validators.required]],
    address:['',[Validators.required]],
    password:['',[Validators.required]],
    group:['',[Validators.required]],
    phone:['',[Validators.required]],
    busNumber:['',[Validators.required]],
    manufacturingCompany:['',[Validators.required]],
    busColor:['',[Validators.required]],
    image:['',[]],
  });

   
  mapValues(){
    this.newSupervisorModel = {
      userNumber:this.newSupervisorForm.controls['userNumber'].value,
      name:this.newSupervisorForm.controls['name'].value,
      nameEn:this.newSupervisorForm.controls['nameEn'].value,
      email:this.newSupervisorForm.controls['email'].value,
      address:this.newSupervisorForm.controls['address'].value,
      password:this.newSupervisorForm.controls['password'].value,
      group:this.newSupervisorForm.controls['group'].value,
      phone:this.newSupervisorForm.controls['phone'].value,
      busNumber:this.newSupervisorForm.controls['busNumber'].value,
      manufacturingCompany:this.newSupervisorForm.controls['manufacturingCompany'].value,
      busColor:this.newSupervisorForm.controls['busColor'].value,
      image:this.newSupervisorForm.controls['image'].value,
    }
  }
   
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


  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    userNumber: ${this.newSupervisorModel.userNumber},
    name: ${this.newSupervisorModel.name},
    nameEn: ${this.newSupervisorModel.nameEn},
    email: ${this.newSupervisorModel.email},
    phone: ${this.newSupervisorModel.phone},
    address: ${this.newSupervisorModel.address},
    password: ${this.newSupervisorModel.password},
    image: ${this.newSupervisorModel.image},
    group: ${this.newSupervisorModel.group},
    busNumber: ${this.newSupervisorModel.busNumber},
    manufacturingCompany: ${this.newSupervisorModel.manufacturingCompany},
    busColor: ${this.newSupervisorModel.busColor},
    `)

    if(this.newSupervisorForm.valid){
      this.mapValues();
      this.supervisorService.addNewSupervisor(this.newSupervisorModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  imageSrc: string | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleImageDrop(files);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleImageDrop(input.files);
  }
  private handleImageDrop(files: FileList | null) {
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.imageSrc = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }
}