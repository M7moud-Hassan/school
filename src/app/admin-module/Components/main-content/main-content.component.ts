import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsImgComponent } from '../details-img/details-img.component';
import { MainAdminService } from '../../Services/main-admin.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
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
      content:['',[Validators.required]],
    });
    
  }
  loadContactData(){
    this.form.patchValue(this.service.adminContentManagementService.getHomeData());
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
}
