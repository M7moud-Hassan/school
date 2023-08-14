import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-dialog',
  templateUrl: './send-dialog.component.html',
  styleUrls: ['./send-dialog.component.css']
})
export class SendDialogComponent {
  constructor(public dialogRef: MatDialogRef<SendDialogComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
