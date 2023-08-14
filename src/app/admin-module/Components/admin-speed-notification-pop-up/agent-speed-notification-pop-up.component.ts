import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-speed-notification-pop-up',
  templateUrl: './agent-speed-notification-pop-up.component.html',
  styleUrls: ['./agent-speed-notification-pop-up.component.css']
})
export class AdminSpeedNotificationPopUpComponent {
  constructor(public dialogRef: MatDialogRef<AdminSpeedNotificationPopUpComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
