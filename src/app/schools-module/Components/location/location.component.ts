import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng:  48.39095806484077
};
zoom=5
}
