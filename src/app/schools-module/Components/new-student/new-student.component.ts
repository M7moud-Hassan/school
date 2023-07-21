import { Component } from '@angular/core';
import { NewStudentModel } from '../../Core/Models/new-student-model';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['../register/register.component.css','../login/login.component.css',
'../profile/profile.component.css','./new-student.component.css']
})
export class NewStudentComponent {
  goShow:boolean=false
  goReturn:boolean=false
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng:  48.39095806484077
};
zoom=5
  newStudentModelModel:NewStudentModel = {} as NewStudentModel;
  constructor(private fb:FormBuilder,private studentService:StudentService){

  }

  newStudentModelForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    name: ['', [Validators.required]],
    nameEn: ['', [Validators.required]],
    userNumber: ['', [Validators.required]],
    address: ['', [Validators.required]],
    homeLocation: ['', [Validators.required]],
    password: ['', [Validators.required]],
    returnJourney: [true, [Validators.required]],
    outboundJourney: [false, [Validators.required]],
  });
   
  get returnJourney(){
    return this.newStudentModelForm.controls['returnJourney'].value;
  }

  get outboundJourney(){
    return this.newStudentModelForm.controls['outboundJourney'].value;
  }

  mapValues(){
    this.newStudentModelModel = {
      name : this.newStudentModelForm.controls['name'].value,
      nameEn : this.newStudentModelForm.controls['nameEn'].value,
      email : this.newStudentModelForm.controls['email'].value,
      userNumber : this.newStudentModelForm.controls['userNumber'].value,
      address : this.newStudentModelForm.controls['address'].value,
      homeLocation : this.newStudentModelForm.controls['homeLocation'].value,
      password : this.newStudentModelForm.controls['password'].value,
      outboundJourney : this.newStudentModelForm.controls['outboundJourney'].value,
      returnJourney : this.newStudentModelForm.controls['returnJourney'].value,
    }
  }
  toggleReturn(){
    this.goReturn=!this.goReturn;
  }
  togglegoShow(){
    
    this.goShow=!this.goShow;
    
  }
  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    userNumber : ${this.newStudentModelModel.userNumber},
    email : ${this.newStudentModelModel.email},
    password : ${this.newStudentModelModel.password},
    name : ${this.newStudentModelModel.name},
    nameEn : ${this.newStudentModelModel.nameEn},
    home location : ${this.newStudentModelModel.homeLocation},
    address : ${this.newStudentModelModel.address},
    outboundJourney : ${this.newStudentModelModel.outboundJourney},
    returnJourney : ${this.newStudentModelModel.returnJourney},
    `)

    if(this.newStudentModelForm.valid){
      this.mapValues();
      this.studentService.addNewStudent(this.newStudentModelModel).subscribe({
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
