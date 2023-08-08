import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';
import { DetailsImgDriverComponent } from '../details-img-driver/details-img-driver.component';

@Component({
  selector: 'app-admin-content-management-partners',
  templateUrl: './admin-content-management-partners.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-content-management-partners.component.css']
})
export class AdminContentManagementPartnersComponent implements OnInit {
  partnerForm:FormGroup = new FormGroup({});
  imageSrc:string = '';
  list:any[] = [];

  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.createForm();
    this.loadContactData();
    this.imageSrc = this.partnerForm.get('image')?.value;
    this.getData();
  }

  createForm(){
    this.partnerForm = this.service.formBuilder.group({
      image:['',[Validators.required]],
      title:['',[Validators.required]],
    });
  }
  getData(){
    this.list = this.service.adminContentManagementService.loadPartnersData().partners;
  }
  loadContactData(){
    this.partnerForm.patchValue(this.service.adminContentManagementService.loadTheTargetersData());
  }
  submit(){
    this.service.printFormValues(this.partnerForm);
    this.service.adminContentManagementService.editTargetData(this.partnerForm.value).subscribe({
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
  back(){
    this.service.back();
  }
}

