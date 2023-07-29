import { Component,AfterViewInit,OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';
import { AuthService } from '../../Services/auth.service';
import { LoginModel } from '../../Core/Models/login-model';
import { ResetPasswordModel } from '../../Core/Models/reset-password-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css','../login/login.component.css']
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {
  // inputValue: string = "";
  // showInput: boolean = false;
  send:boolean=false;
  imageSource:string = "assets/images/message.svg";
  labelSubmit:string='ارسال' ;
  titleForm:string='اعادة تعيين كلمة المرور';
  label2:string='البريد الإلكترونى / رقم الهاتف' ;
  // showContainer:boolean=true;
  resetPasswordModel:ResetPasswordModel = {} as ResetPasswordModel;

  constructor(private router:Router,private fb:FormBuilder,private dialog: MatDialog, private elementRef: ElementRef,private authService:AuthService) {
  }
  loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      userNumber: ['', [Validators.required, Validators.minLength(8)]],
    });

  


  ngAfterViewInit(): void {
    const toggle = document.querySelector(".toggle") as HTMLElement;
    const input = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;

    toggle.addEventListener("click", () => {
      if (input[1].type === "password") {
        input[1].type = "text";
        toggle.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        input[1].type = "password";
        toggle.classList.replace("uil-eye", "uil-eye-slash");
      }
    });

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

  onSubmit() {
    this.send=true;
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    ${this.resetPasswordModel.userNumber},
    ${this.resetPasswordModel.email},
    `)
    setTimeout(()=>{
      this.router.navigate(['/new-password'])
    },1000)
   
    if(this.loginForm.valid){
      this.mapValues();
      this.authService.resetPassword(this.resetPasswordModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }

  @ViewChild('dialog', { static: true }) set content(content: ElementRef) {
    this.elementRef = content;
  }
  
  mapValues(){
    this.resetPasswordModel = {
      userNumber : this.loginForm.controls['userNumber'].value,
      email : this.loginForm.get('email')?.value,
    }
  }

  ngOnInit() {
  }
}
