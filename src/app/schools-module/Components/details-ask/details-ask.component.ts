import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details-ask',
  templateUrl: './details-ask.component.html',
  styleUrls: ['./details-ask.component.css']
})
export class DetailsAskComponent {
  constructor(public dialogRef: MatDialogRef<DetailsAskComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
