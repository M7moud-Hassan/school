import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-password',
  templateUrl: './student-password.component.html',
  styleUrls: ['./student-password.component.css']
})
export class StudentPasswordComponent {
  constructor(public dialogRef: MatDialogRef<StudentPasswordComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
