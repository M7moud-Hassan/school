import { Component,AfterViewInit,OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { MainService } from '../../Services/main.service';

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
  loginForm:FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder,private dialog: MatDialog, private elementRef: ElementRef,private authService:AuthService,
    private router: Router,private service:MainService) {
  }
  
    ngOnInit() {
     this.createForm();
    }
    createForm(){
      this.loginForm = this.service.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        rememberMe: [false]
      });
    }


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

  onSubmit() {  
    this.service.printFormValues(this.loginForm);

    //TODO : To be removed .
    this.service.router.navigate(['/home']); 

    if(this.loginForm.valid){
      this.service.authService.login(this.loginForm.value).subscribe({
        next:(response)=>{
          this.router.navigate(['/home']);       
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
}
