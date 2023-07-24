import { Component ,AfterViewInit, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { FormGroup, Validators } from '@angular/forms';
import { adsEditModel } from '../../Services/ads.service';

@Component({
  selector: 'app-details-ads',
  templateUrl: './details-ads.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css','../profile/profile.component.css','../new-student/new-student.component.css','./details-ads.component.css']
})
export class DetailsAdsComponent  implements OnInit{
  detailsAdForm:FormGroup = new FormGroup({});
  constructor(private service:MainService){}

  ngOnInit(): void {
    this.createForm();
    this.getDetailsAd();
  }

  getDetailsAd(){
    this.detailsAdForm.patchValue(this.service.adsService.getDetailsAd());
  }

  createForm(){
    this.detailsAdForm = this.service.formBuilder.group({
      image:['',[Validators.required]],
      title:['',[Validators.required]],
      details:['',[Validators.required]],
    });
  }

  submit(){
    this.service.printFormValues(this.detailsAdForm);
    this.service.adsService.addNewAd(this.detailsAdForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        
      }
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Do something with the selected file...
    const reader = new FileReader();
    reader.onload = () => {
      this.detailsAdForm.controls['image'].setValue(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  }
  get getImage(){
    return this.detailsAdForm.controls['image'].value;
  }
}
