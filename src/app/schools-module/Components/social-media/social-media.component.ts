import { Component } from '@angular/core';
import { SocilaMediaLinksModel } from '../../Core/Models/socila-media-links-model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  socilaMediaLinksModel:SocilaMediaLinksModel = {} as SocilaMediaLinksModel;

  constructor(private fb:FormBuilder,private authService:AuthService){}

  socilaMediaLinksForm = this.fb.group({
    facebook:['',[Validators.required]],
    instagram:['',[Validators.required]],
    whatsApp:['',[Validators.required]],
    telegram:['',[Validators.required]],
    twitter:['',[Validators.required]],
    snapChat:['',[Validators.required]],
  });
  mapsocilaMediaLinksModel(){
    this.socilaMediaLinksModel = {
      facebook :this.socilaMediaLinksForm.controls['facebook'].value,
      instagram:this.socilaMediaLinksForm.controls['instagram'].value,
      whatsApp :this.socilaMediaLinksForm.controls['whatsApp'].value,
      telegram :this.socilaMediaLinksForm.controls['telegram'].value,
      twitter  :this.socilaMediaLinksForm.controls['twitter'].value,
      snapChat :this.socilaMediaLinksForm.controls['snapChat'].value,
    }
  }
  submit(){
    this.mapsocilaMediaLinksModel();
    alert(`
    ${this.socilaMediaLinksForm.controls['facebook'].value}
    ${this.socilaMediaLinksForm.controls['instagram'].value}
    ${this.socilaMediaLinksForm.controls['whatsApp'].value}
    ${this.socilaMediaLinksForm.controls['telegram'].value}
    ${this.socilaMediaLinksForm.controls['twitter'].value}
    ${this.socilaMediaLinksForm.controls['snapChat'].value}
    `)
    this.authService.saveSocialMediaLinks(this.socilaMediaLinksModel).subscribe({
      next:(res)=>{

      },
      error:(error)=>{

      }
    })
  }

}
