import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangePasswordModel } from '../../Core/Models/change-password-model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  old:boolean = false;
  newPwd:boolean = false;
  confirm:boolean = false;
  isMAtch:boolean = true ;
  changePasswordModel:ChangePasswordModel = {} as ChangePasswordModel;

  constructor(private fb:FormBuilder,private authService:AuthService) {
  }
  changePasswordForm = this.fb.group({
    oldPassword: ['', [Validators.required, ]],
    newPassword: ['', [Validators.required, ]],
    confirmPassword: ['', [Validators.required, ]],
    });
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

    //TODO: remove
    this.mapValues();
    if(!this.isPasswordAreIdentical){
      alert('password not identical !');
    }
    //TODO: remove

    alert(`
    ${this.changePasswordModel.oldPassword},
    ${this.changePasswordModel.newPassword},
    `)

    if(this.changePasswordForm.valid){
      this.mapValues();
      this.authService.changePassword(this.changePasswordModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  
  mapValues(){
    this.changePasswordModel = {
      oldPassword : this.changePasswordForm.controls['oldPassword'].value,
      newPassword : this.changePasswordForm.get('newPassword')?.value,
      confirmPassword : this.changePasswordForm.get('confirmPassword')?.value,
    }
  }

}
