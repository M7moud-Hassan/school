import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-admin-content-management-privacy',
  templateUrl: './admin-content-management-privacy.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-content-management-privacy.component.css']
})
export class AdminContentManagementPrivacyComponent implements OnInit {
  contactForm:FormGroup = new FormGroup({});

  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.contactForm = this.service.formBuilder.group({
      title:['',[Validators.required]],
      content:['',[Validators.required]],
    });
    this.loadContactData();
  }
  loadContactData(){
    this.contactForm.patchValue(this.service.adminContentManagementService.getConentData());
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

}
