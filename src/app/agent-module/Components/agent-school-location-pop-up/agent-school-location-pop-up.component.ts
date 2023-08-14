import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-school-location-pop-up',
  templateUrl: './agent-school-location-pop-up.component.html',
  styleUrls: ['./agent-school-location-pop-up.component.css']
})
export class AgentSchoolLocationPopUpComponent {
  zoom = 5
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };
  constructor(public dialogRef: MatDialogRef<AgentSchoolLocationPopUpComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
