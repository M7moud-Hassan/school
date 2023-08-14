import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-speed-notification-pop-up',
  templateUrl: './agent-speed-notification-pop-up.component.html',
  styleUrls: ['./agent-speed-notification-pop-up.component.css']
})
export class AgentSpeedNotificationPopUpComponent {
  constructor(public dialogRef: MatDialogRef<AgentSpeedNotificationPopUpComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
