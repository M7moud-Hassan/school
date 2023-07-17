import { Component ,ViewChild  } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-tracking-trip',
  templateUrl: './tracking-trip.component.html',
  styleUrls: ['./tracking-trip.component.css']
})
export class TrackingTripComponent {
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 21.467420120714536,
      lng:  48.39095806484077
  };
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  zoom = 5;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: 21.467420120714536,
      lng: 48.39095806484077
  }

  ];

  markerIcon: google.maps.Icon = {
    url: 'assets/images/marker_red.svg',
  };
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
}
}


