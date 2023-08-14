import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details-img-driver',
  templateUrl: './details-img-driver.component.html',
  styleUrls: ['../details-img/details-img.component.css','./details-img-driver.component.css']
})
export class DetailsImgDriverComponent implements OnInit {
  imageForm:FormGroup = new FormGroup({});
  userImage:any = "/assets/images/home-bus.svg";
  shape:string = 'square';



  constructor(private service:MainAdminService,public dialogRef: MatDialogRef<DetailsImgDriverComponent>){}
  ngOnInit(): void {
    this.createForm();
    this.getDetails();
    this.userImage = this.imageForm.controls['image'].value ?? this.userImage ;
    this.shape = this.imageForm.get('shape')?.value;
  }
  changeShape(shape:any){
    this.shape = shape;
    this.imageForm.get('shape')?.setValue(shape);
  }
  createForm(){
    this.imageForm = this.service.formBuilder.group({
      image:['', [Validators.required]],
      label:['', [Validators.required]],
      shape:['square', [Validators.required]],
      imageSize:['', [Validators.required]],
      shapeSize:['', [Validators.required]],
      shapeColor:['', [Validators.required]]
    });
  }

  getDetails(){
    let model = this.service.adminContentManagementService.loadPopupTargetImageData();
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

