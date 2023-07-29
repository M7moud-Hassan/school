import { Component, OnInit } from '@angular/core';
import { MainAdminService } from '../../Services/main-admin.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-content-management-contact-us',
  templateUrl: './admin-content-management-contact-us.component.html',
  styleUrls: ['./admin-content-management-contact-us.component.css']
})
export class AdminContentManagementContactUsComponent implements OnInit {
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
