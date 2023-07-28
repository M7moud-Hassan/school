import { Component } from '@angular/core';

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
}
