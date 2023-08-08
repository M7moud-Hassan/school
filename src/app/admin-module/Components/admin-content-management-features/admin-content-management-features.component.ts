import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';
import { DetailsImgDriverComponent } from '../details-img-driver/details-img-driver.component';

@Component({
  selector: 'app-admin-content-management-features',
  templateUrl: './admin-content-management-features.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-content-management-features.component.css']
})
export class AdminContentManagementFeaturesComponent  implements OnInit {
  FeaturesForm:FormGroup = new FormGroup({});
  imageSrc:string = '';

  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.createForm();
    this.loadFeaturesData();
    this.imageSrc = this.FeaturesForm.get('image')?.value;
  }

  createForm(){
    this.FeaturesForm = this.service.formBuilder.group({
      title:['',[Validators.required]],
      image:['',[Validators.required]],
      featureNo_1:['',[Validators.required]],
      featureNo_2:['',[Validators.required]],
      featureNo_3:['',[Validators.required]],
      featureNo_4:['',[Validators.required]],
      featureNo_5:['',[Validators.required]],
      featureNo_6:['',[Validators.required]],
    });
  }
  loadFeaturesData(){
    this.FeaturesForm.patchValue(this.service.adminContentManagementService.loadFeaturesData());
  }
  submit(){
    this.service.printFormValues(this.FeaturesForm);
    this.service.adminContentManagementService.editTargetData(this.FeaturesForm.value).subscribe({
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

