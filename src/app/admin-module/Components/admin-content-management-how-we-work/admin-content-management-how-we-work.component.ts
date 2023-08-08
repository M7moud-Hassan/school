import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';
import { DetailsImgComponent } from '../details-img/details-img.component';

@Component({
  selector: 'app-admin-content-management-how-we-work',
  templateUrl: './admin-content-management-how-we-work.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-content-management-how-we-work.component.css']
})
export class AdminContentManagementHowWeWorkComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  image:string = '';

  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.createForm();
    this.loadContactData();
    this.image = this.form.get('image')?.value;
  }

  createForm(){
    this.form = this.service.formBuilder.group({
      image:['',[Validators.required]],
      title:['',[Validators.required]],
    });
    
  }
  loadContactData(){
    this.form.patchValue(this.service.adminContentManagementService.getHowWeWorksData());
  }
  submit(){
    this.service.printFormValues(this.form);
    this.service.adminContentManagementService.addContact(this.form.value).subscribe({
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
