import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewParentsModel, StudentDataModel } from '../../Core/Models/new-parents-model';
import { ParentService } from '../../Services/parent.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['../new-student/new-student.component.css','./parents.component.css',]
})
export class ParentsComponent {
  newParentModel:NewParentsModel = {} as NewParentsModel;
  studentDataModel:StudentDataModel = {} as StudentDataModel;
  constructor(private fb:FormBuilder,private parentService:ParentService){

  }
  relativeTypes = [
    {id:1,type:'أب'},
    {id:2,type:'أم'},
    {id:3,type:'أخ'},
    {id:4,type:'أخت'},
    {id:5,type:'خال'},
    {id:6,type:'خالة'},
    {id:7,type:'عم'},
    {id:8,type:'عمة'},
    {id:9,type:'جد'},
    {id:10,type:'جدة'},
  ];
  newparentForm = this.fb.group({
    userNumber : ['',[Validators.required]],
    name : ['',[Validators.required]],
    nameEn : ['',[Validators.required]],
    email : ['',[Validators.required]],
    phone : ['',[Validators.required]],
    address : ['',[Validators.required]],
    password : ['',[Validators.required]],
    image : ['',[]]
  });
  studentDataForm = this.fb.group({
    relativeType : ['',[Validators.required]],
    numberOfChildren : ['',[Validators.required]],
    studentName : ['',[Validators.required]],
  });
   
  mapValues(){
    this.newParentModel = {
      userNumber:this.newparentForm.controls['userNumber'].value,
      name:this.newparentForm.controls['name'].value,
      nameEn:this.newparentForm.controls['nameEn'].value,
      email:this.newparentForm.controls['email'].value,
      phone:this.newparentForm.controls['phone'].value,
      address:this.newparentForm.controls['address'].value,
      password:this.newparentForm.controls['password'].value,
      image:this.newparentForm.controls['image'].value
    }
  }
  mapStudentDataModel(){
    this.studentDataModel = {
      relativeType:this.studentDataForm.controls['relativeType'].value,
      numberOfChildren:this.studentDataForm.controls['numberOfChildren'].value,
      studentName:this.studentDataForm.controls['studentName'].value,
    }
  }
  submitStudentData(){
    this.mapStudentDataModel();
    alert(`
    relativeType: ${this.studentDataModel.relativeType},
    numberOfChildren: ${this.studentDataModel.numberOfChildren},
    studentName: ${this.studentDataModel.studentName},
    `);
  }
  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    userNumber: ${this.newParentModel.userNumber},
    name: ${this.newParentModel.name},
    nameEn: ${this.newParentModel.nameEn},
    email: ${this.newParentModel.email},
    phone: ${this.newParentModel.phone},
    address: ${this.newParentModel.address},
    password: ${this.newParentModel.password},
    image: ${this.newParentModel.image}
    `)

    if(this.newparentForm.valid){
      this.mapValues();
      this.parentService.addNewParent(this.newParentModel).subscribe({
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
