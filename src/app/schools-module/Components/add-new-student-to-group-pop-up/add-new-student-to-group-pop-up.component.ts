import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-student-to-group-pop-up',
  templateUrl: './add-new-student-to-group-pop-up.component.html',
  styleUrls: ['./add-new-student-to-group-pop-up.component.css']
})
export class AddNewStudentToGroupPopUpComponent {

constructor(public dialogRef: MatDialogRef<AddNewStudentToGroupPopUpComponent>) {
  
}
closeDialog(): void {
  this.dialogRef.close();
}
}
