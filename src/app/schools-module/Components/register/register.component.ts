import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../Services/auth.service';
import { RegisterModel } from '../../Core/Models/register-model';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})
export class RegisterComponent {
  imageSource:string = "assets/images/message.svg";
  labelSubmit:string='دخول' ;
  registerModel:RegisterModel = {} as RegisterModel;
  input:any ;
  countryCode=966;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.SaudiArabia, CountryISO.UnitedKingdom];

  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });
  // phoneForm = new FormGroup({
  //   phone: new FormControl(undefined, [Validators.required])
  // });
  constructor(private router: Router,private fb:FormBuilder,private authService:AuthService,private dialog: MatDialog, private elementRef: ElementRef,){}


  registerForm = this.fb.group({
    email:['',[Validators.required]],
    phone:['',[Validators.required]],
    address:['',[Validators.required]],
    nameInArabic:['',[Validators.required]],
    nameInEnglish:['',[Validators.required]],
  });

  onCountrySelected(event: any) {
    this.countryCode=event.dialCode;
    // TODo : do something with the selected country code
  }

   ngAfterViewInit() {
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
  submit(){
    //TODO : remove 

    this.mapValues();
    alert(`
    ${this.registerModel.email} , 
    ${this.registerModel.address} , 
    ${this.registerModel.phone} , 
    ${this.registerModel.nameInArabic} , 
    ${this.registerModel.nameInEnglish} , 
    `);

    this.router.navigate(['/home'])
    if(this.registerForm.valid){
      this.authService.register(this.registerModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  mapValues(){
    this.registerModel = {
      email : this.registerForm.controls['email'].value,
      address : this.registerForm.controls['address'].value,
      phone : this.registerForm.controls['phone'].value,
      nameInArabic : this.registerForm.controls['nameInArabic'].value,
      nameInEnglish : this.registerForm.controls['nameInEnglish'].value,
    }
  }


  @ViewChild('dialog', { static: true }) set content(content: ElementRef) {
    this.elementRef = content;
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.position = {
      top: `${this.elementRef.nativeElement.offsetTop - 30}px`,
      left: `${this.elementRef.nativeElement.offsetLeft}px`
    };
    const dialogRef: MatDialogRef<DilaogContactComponent> = this.dialog.open(DilaogContactComponent, dialogConfig);

    dialogRef.afterOpened().subscribe(() => {
      this.imageSource =
     "assets/images/close.svg";
    });
  
    dialogRef.afterClosed().subscribe(() => {
      this.imageSource =
     "assets/images/message.svg";
    });
  }
}
