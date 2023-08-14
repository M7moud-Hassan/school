import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-supervisors',
  templateUrl: './dialog-supervisors.component.html',
  styleUrls: ['./dialog-supervisors.component.css']
})
export class DialogSupervisorsComponent {

  constructor(public dialogRef: MatDialogRef<DialogSupervisorsComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
