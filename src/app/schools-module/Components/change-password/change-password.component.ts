import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordModel } from '../../Core/Models/change-password-model';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  old:boolean = false;
  newPwd:boolean = false;
  confirm:boolean = false;
  isMAtch:boolean = true ;
  changePasswordForm:FormGroup = new FormGroup({});

  constructor(private service:MainService) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.changePasswordForm = this.service.formBuilder.group({
      oldPassword: ['', [Validators.required, ]],
      newPassword: ['', [Validators.required, ]],
      confirmPassword: ['', [Validators.required, ]],
      });
  }
    checkMatch(){
      if(!(this.changePasswordForm.controls['newPassword'].value == this.changePasswordForm.controls['confirmPassword'].value && 
      (this.changePasswordForm.controls['newPassword'].value != "" && this.changePasswordForm.controls['confirmPassword'].value != ""))){
        this.isMAtch = false;
      }else{
        this.isMAtch = true;
      }
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

  get isPasswordAreIdentical(){
    return this.changePasswordForm.controls['newPassword'].value == this.changePasswordForm.controls['confirmPassword'].value;
  }
  onSubmit() {
    this.service.printFormValues(this.changePasswordForm);
    if(this.changePasswordForm.valid){
      this.service.authService.changePassword(this.changePasswordForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  

}
