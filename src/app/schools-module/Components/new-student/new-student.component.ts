import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['../register/register.component.css','../login/login.component.css',
'../profile/profile.component.css','./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  goShow: boolean = false ;
  goReturn: boolean = false ;
  imageSrc: string | null = null;
  zoom = 5 ;
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };
  newStudentForm:FormGroup = new FormGroup({});

  constructor(private service:MainService){}
  
  ngOnInit(): void {
    this.createStudentForm();
  }

  createStudentForm(){
    this.newStudentForm = this.service.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      userNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      homeLocation: ['', [Validators.required]],
      password: ['', [Validators.required]],
      returnJourney: [true, [Validators.required]],
      outboundJourney: [false, [Validators.required]],
      image: ['', []],
    });
  }

  get returnJourney(){
    return this.newStudentForm.controls['returnJourney'].value;
  }
  get outboundJourney(){
    return this.newStudentForm.controls['outboundJourney'].value;
  }

  toggleReturn(){
    this.goReturn=!this.goReturn;
  }
  togglegoShow(){ 
    this.goShow=!this.goShow;
  }
  onSubmit() {
    this.service.printFormValues(this.newStudentForm);

    if(this.newStudentForm.valid){
      this.service.studentService.addNewStudent(this.newStudentForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }

  

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
