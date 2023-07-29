import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsImgComponent } from '../details-img/details-img.component';
import { DetailsImgDriverComponent } from '../details-img-driver/details-img-driver.component';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-targeteds',
  templateUrl: './targeteds.component.html',
  styleUrls: ['../content-management/content-management.component.css','./targeteds.component.css']
})
export class TargetedsComponent implements OnInit {
  contactForm:FormGroup = new FormGroup({});
  imageSrc:string = '';
  list:any[] = [];

  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.createForm();
    this.loadContactData();
    this.imageSrc = this.contactForm.get('image')?.value;
    this.getData();
  }

  createForm(){
    this.contactForm = this.service.formBuilder.group({
      title:['',[Validators.required]],
      details:['',[Validators.required]],
      image:['',[Validators.required]],
    });
  }
  getData(){
    this.list = this.service.adminContentManagementService.loadTheTargetersData().imagesData;
  }
  loadContactData(){
    this.contactForm.patchValue(this.service.adminContentManagementService.loadTheTargetersData());
  }
  submit(){
    this.service.printFormValues(this.contactForm);
    this.service.adminContentManagementService.editTargetData(this.contactForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        
      }
    });
  }
  openDialogImg(){
    this.service.dialog.open(DetailsImgDriverComponent,{
      width:'50%'
    })
  }

}

