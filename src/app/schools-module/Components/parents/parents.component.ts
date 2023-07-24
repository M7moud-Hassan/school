import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { relativeModel } from '../../Services/parent.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['../new-student/new-student.component.css','./parents.component.css',]
})
export class ParentsComponent implements OnInit {
  imageSrc: string | null = null;
  relativeTypes:relativeModel[] = [];
  newparentForm:FormGroup = new FormGroup({});
  studentDataForm:FormGroup = new FormGroup({});
  constructor(private service:MainService) {}
  ngOnInit(): void {
    this.getRelatives();
    this.createParentForm();
    this.createStudentDatForm();
  }
  
  getRelatives(){
    this.relativeTypes =this.service.parentService.getRelativesList();
  }
  createParentForm(){
    this.newparentForm = this.service.formBuilder.group({
      userNumber : ['',[Validators.required]],
      name : ['',[Validators.required]],
      nameEn : ['',[Validators.required]],
      email : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      address : ['',[Validators.required]],
      password : ['',[Validators.required]],
      image : ['',[]]
    });
  }
  createStudentDatForm(){
   this.studentDataForm = this.service.formBuilder.group({
    relativeType : ['',[Validators.required]],
    numberOfChildren : ['',[Validators.required]],
    studentName : ['',[Validators.required]],
  });
  }
  
  submitStudentData(){
    this.service.printFormValues(this.studentDataForm);
    if(this.newparentForm.valid){
      this.service.parentService.addStudentDate(this.studentDataForm.value).subscribe({
        next:(response)=>{
        },
        error:(error)=>{
        }
      });
    }
  }
  onSubmit() {
    this.service.printFormValues(this.newparentForm);
    if(this.newparentForm.valid){
      this.service.parentService.addNewParent(this.newparentForm.value).subscribe({
        next:(response)=>{
        },
        error:(error)=>{
        }
      });
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
    this.saveImage(event);
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

  saveImage(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.newparentForm.controls['image'].setValue(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  }

}
