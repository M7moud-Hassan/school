import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DilaogContactComponent } from '../dilaog-contact/dilaog-contact.component';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['../login/login.component.css','./new-password.component.css']
})
export class NewPasswordComponent {
  imageSource:string = "assets/images/message.svg";
  constructor(private dialog: MatDialog,private elementRef: ElementRef,) {
 
    
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
