import { Component, OnInit } from '@angular/core';
import { SocilaMediaLinksModel } from '../../Core/Models/socila-media-links-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  socilaMediaLinksForm:FormGroup = new FormGroup({});

  constructor(private service:MainService){}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this. socilaMediaLinksForm = this.service.formBuilder.group({
      facebook:['',[Validators.required]],
      instagram:['',[Validators.required]],
      whatsApp:['',[Validators.required]],
      telegram:['',[Validators.required]],
      twitter:['',[Validators.required]],
      snapChat:['',[Validators.required]],
    });
  }
 
  
  submit(){
    this.service.printFormValues(this.socilaMediaLinksForm);
    this.service.authService.saveSocialMediaLinks(this.socilaMediaLinksForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{

      }
    })
  }

}
