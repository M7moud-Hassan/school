import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';
import { DetailsImgComponent } from '../details-img/details-img.component';

@Component({
  selector: 'app-admin-content-management-home',
  templateUrl: './admin-content-management-home.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-content-management-home.component.css']
})
export class AdminContentManagementHomeComponent implements OnInit {
  contactForm:FormGroup = new FormGroup({});
  imageSrc:string = '';

  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.createForm();
    this.loadContactData();
    this.imageSrc = this.contactForm.get('image')?.value;
  }

  createForm(){
    this.contactForm = this.service.formBuilder.group({
      title:['',[Validators.required]],
      content:['',[Validators.required]],
      image:['',[Validators.required]],
    });
  }
  loadContactData(){
    this.contactForm.patchValue(this.service.adminContentManagementService.getHomeData());
  }
  submit(){
    this.service.printFormValues(this.contactForm);
    this.service.adminContentManagementService.addContact(this.contactForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        
      }
    });
  }
  openDialogImg(){
    this.service.dialog.open(DetailsImgComponent,{
      width:'50%'
    })
  }
  back(){
    this.service.back();
  }

}

