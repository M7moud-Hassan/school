import { Component,AfterViewInit,OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  inputValue: string = "";
  showInput: boolean = false;
  imageSource:string =
     "assets/images/message.svg";
  titleForm:string='تسجيل الدخول';
  label2:string='كلمة المرور'
  labelSubmit:string='دخول'
  showContainer:boolean=true;
  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
  )

  constructor(private dialog: MatDialog, private elementRef: ElementRef) {
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

  }

  @ViewChild('dialog', { static: true }) set content(content: ElementRef) {
    this.elementRef = content;
  }

  toggleInputVisibility() {
    this.showInput = !this.showInput;
  }

  ngOnInit() {
  }
}
