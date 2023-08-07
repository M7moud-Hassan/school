import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['../login/login.component.css','./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  showInput1:boolean=false;
  showInput2:boolean=false;
  showInput3:boolean=false;
  imageSource:string = "assets/images/message.svg";
  resetPassword:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private dialog: MatDialog,private elementRef: ElementRef,private service:MainService) {
 
    
  }
  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.resetPassword = this.service.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword')!.value;
    const repeatPassword = formGroup.get('repeatPassword')!.value;

    if (newPassword !== repeatPassword) {
      formGroup.get('repeatPassword')!.setErrors({ compareWith: true });
    } else {
      formGroup.get('repeatPassword')!.setErrors(null);
    }
  }

  get currentPassword() {
    return this.resetPassword.get('currentPassword');
  }

  get newPassword() {
    return this.resetPassword.get('newPassword');
  }

  get repeatPassword() {
    return this.resetPassword.get('repeatPassword');
  }

  @ViewChild('dialog', { static: true }) set content(content: ElementRef) {
    this.elementRef = content;
  }

  onSubmit(){
    this.service.printFormValues(this.resetPassword);
  }

  ngAfterViewInit(): void {
    const toggle1 = document.querySelector(".toggle1") as HTMLElement;
    const toggle2 = document.querySelector(".toggle2") as HTMLElement;
    const toggle3 = document.querySelector(".toggle3") as HTMLElement;
    const input = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;

    toggle1.addEventListener("click", () => {
      if (input[0].type === "password") {
        input[0].type = "text";
        toggle1.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        input[0].type = "password";
        toggle1.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
    toggle2.addEventListener("click", () => {
      if (input[1].type === "password") {
        input[1].type = "text";
        toggle2.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        input[1].type = "password";
        toggle2.classList.replace("uil-eye", "uil-eye-slash");
      }
    });

    toggle3.addEventListener("click", () => {
      if (input[2].type === "password") {
        input[2].type = "text";
        toggle3.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        input[2].type = "password";
        toggle3.classList.replace("uil-eye", "uil-eye-slash");
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
  toggle1(){
    this.showInput1=!this.showInput1;
  }
  toggle2(){
    this.showInput2=this.showInput2;
  }
  toggle3(){
    this.showInput3=this.showInput3;
  }
}
