import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
  constructor(public dialogRef: MatDialogRef<DeleteStudentComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
