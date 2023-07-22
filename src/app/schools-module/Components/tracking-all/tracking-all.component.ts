import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-tracking-all',
  templateUrl: './tracking-all.component.html',
  styleUrls: ['./tracking-all.component.css']
})
export class TrackingAllComponent {
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 21.467420120714536,
      lng:  48.39095806484077
  };

  zoom = 5;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
      console.log(event.latLng!.toJSON());
      console.log(event.latLng?.lng);
      
      
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: 21.467420120714536,
      lng: 48.39095806484077,
      
  },
  { lat: 24.45852011026495, lng: 45.44112896327827 },
  { lat: 23.09122242799289, lng: 42.54073833827827 },
  { lat: 28.968454065065547, lng: 40.64559673671577 },
  { lat: 30.27680267506169, lng: 38.39889263515327 },
  { lat: 18.42813150093544, lng: 50.276022017995295 },
  { lat: 16.286330800611424, lng: 45.392599166432795 },
  { lat: 28.544673908802345, lng: 39.28329204921577 },
  { lat: 25.659209065135556, lng: 39.44409189314886 },
  { lat: 23.182038576027132, lng: 40.11680476491328 },
  { lat: 20.61647740255107, lng: 42.67297472500137 },
  { lat: 20.970965879067865, lng: 46.26623430415857 }

  ];

  markerIcon: google.maps.Icon = {
    url: 'assets/images/bus_green.svg',
  };
  markerIcon_green: google.maps.Icon = {
    url: 'assets/images/bus_red.svg',
  };

}
