import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details-img',
  templateUrl: './details-img.component.html',
  styleUrls: ['./details-img.component.css']
})
export class DetailsImgComponent implements OnInit {
  imageForm:FormGroup = new FormGroup({});
  userImage:any = "/assets/images/home-bus.svg";
  alignment:string = 'right';



  constructor(private service:MainAdminService,public dialogRef: MatDialogRef<DetailsImgComponent>){}
  ngOnInit(): void {
    this.createForm();
    this.getDetails();
    this.userImage = this.imageForm.controls['image'].value ?? this.userImage ;
    this.alignment = this.imageForm.get('alignment')?.value;
  }
  changeAlignment(align:any){
    this.alignment = align;
  }
  createForm(){
    this.imageForm = this.service.formBuilder.group({
      image: ['', [Validators.required]],
      imageSize: ['', [Validators.required]],
      alignment: ['', [Validators.required]],
    });
  }

  getDetails(){
    let model = this.service.adminContentManagementService.loadImageHomeSetting();
    this.imageForm.patchValue(model);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.userImage = URL.createObjectURL(file);
    };
    reader.readAsDataURL(file);
    this.imageForm.controls['image'].setValue(this.userImage);
  }
  
  onSubmit() {
    this.service.printFormValues(this.imageForm);
    if(this.imageForm.valid){
      this.service.adminContentManagementService.editImageHomeSetting(this.imageForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
