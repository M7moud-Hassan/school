import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { SchoolHomePageService } from 'src/app/appServices/school-home-page.service';
import { MainService } from 'src/app/schools-module/Services/main.service';

@Component({
  selector: 'app-section7-contact-us',
  templateUrl: './section7-contact-us.component.html',
  // styleUrls: ['../../schools-module/Components/login/login.component.css', '../../schools-module/Components/register/register.component.css','./section7-contact-us.component.css']
  styleUrls: ['./section7-contact-us.component.css']
})
export class Section7ContactUsComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  input:any ;
  countryCode=966;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.SaudiArabia, CountryISO.UnitedKingdom];
constructor(private mainService:MainService,private homeservice:SchoolHomePageService){}
  ngOnInit(): void {
    this.createForm();
  }

  onCountrySelected(event: any) {
    this.countryCode=event.dialCode;
    // TODo : do something with the selected country code
  }

  createForm(){
   this.form = this.mainService.formBuilder.group({
     name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required]],
    message:['',[Validators.required]],
    isNotRobot:[false,[Validators.required]],
  });
  }

  submit(){
    this.mainService.printFormValues(this.form);

    if(this.form.valid){
      this.homeservice.sendContactUs(this.form.value).subscribe({
        next:(response)=>{
          
        },
        error:(error)=>{

        }
      })
    }
  }

}
