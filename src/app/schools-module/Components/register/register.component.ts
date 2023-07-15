import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})
export class RegisterComponent extends LoginComponent {
  input:any
  countryCode=966;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.SaudiArabia, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

 
  // constructor(private el: ElementRef, dialog: MatDialog,  elementRef: ElementRef) {
  //   super(dialog,elementRef);
  // }
  onCountrySelected(event: any) {
    this.countryCode=event.dialCode;
    // Do something with the selected country code
  }

  override ngAfterViewInit() {
    const element = document.querySelector('.iti') as HTMLElement;
    this.input = document.getElementById('phone');
    this.input!.setAttribute('placeholder', 'ادخل رقم الهاتف');
    this.input.setAttribute('style', 'font-size: 12px;');
    this.input!.addEventListener('focus', () => {
      element.style.borderColor = '#4070f4';
    });
    this.input!.addEventListener('blur', () => {
      element.style.borderColor = '#fff';
    });

  }
}
