import { Component,AfterViewInit,OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';
import { AuthService } from '../../Services/auth.service';
import { LoginModel } from '../../Core/Models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  inputValue: string = "";
  showInput: boolean = false;
  imageSource:string = "assets/images/message.svg";
  labelSubmit:string='دخول' ;
  titleForm:string='تسجيل الدخول';
  label2:string='كلمة المرور' ;
  showContainer:boolean=true;
  loginModel:LoginModel = {} as LoginModel;

  constructor(private fb:FormBuilder,private dialog: MatDialog, private elementRef: ElementRef,private authService:AuthService) {
  }
  loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
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
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    ${this.loginModel.userNumber},
    ${this.loginModel.password},
    ${this.loginModel.rememberMe},
    `)

    if(this.loginForm.valid){
      this.mapValues();
      this.authService.login(this.loginModel).subscribe({
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
  toggleInputVisibility() {
    this.showInput = !this.showInput;
  }
  
  mapValues(){
    this.loginModel = {
      userNumber : this.loginForm.controls['email'].value,
      password : this.loginForm.get('password')?.value,
      rememberMe : this.loginForm.get('rememberMe')?.value,
    }
  }

  ngOnInit() {
  }
}
