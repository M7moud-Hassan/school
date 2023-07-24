import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RegisterModel } from '../../Core/Models/register-model';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';
import { MainService } from '../../Services/main.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit{
  imageSource:string = "assets/images/message.svg";
  labelSubmit:string='دخول' ;
  input:any ;
  countryCode=966;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.SaudiArabia, CountryISO.UnitedKingdom];


  // phoneForm = new FormGroup({
  //   phone: new FormControl(undefined, [Validators.required])
  // });

  constructor(private service:MainService, private elementRef: ElementRef,){}
   ngOnInit(): void {
    this.createForm();
  }


  registerForm:FormGroup = new FormGroup({});
  createForm(){
   this.registerForm = this.service.formBuilder.group({
    email:['',[Validators.required]],
    phone:['',[Validators.required]],
    address:['',[Validators.required]],
    nameInArabic:['',[Validators.required]],
    nameInEnglish:['',[Validators.required]],
  });
  }
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
    this.service.printFormValues(this.registerForm);

    //TODO : remove
    this.service.router.navigate(['/home'])

    if(this.registerForm.valid){
      this.service.authService.register(this.registerForm.value).subscribe({
        next:(response)=>{
           this.service.router.navigate(['/home'])
        },
        error:(error)=>{

        }
      })
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
    const dialogRef: MatDialogRef<DilaogContactComponent> = this.service.dialog.open(DilaogContactComponent, dialogConfig);

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
