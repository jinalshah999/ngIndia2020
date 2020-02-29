import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-map-demo',
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.css']
})
export class MapDemoComponent implements OnInit {
center:google.maps.LatLngLiteral;
@ViewChild(MapInfoWindow) info:MapInfoWindow;
content:string='';
markers=[];
  constructor() { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((x)=>{
      this.center={
        lat:x.coords.latitude,
        lng:x.coords.longitude
      };
      this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng
        },
        label: {
          color: "red",
          text: "Marker label " + (this.markers.length + 1)
        },
        title: "Marker title " + (this.markers.length + 1),
        info: "Marker info " + (this.markers.length + 1),
        options: {
          animation: google.maps.Animation.BOUNCE
        }
      });

    });

  }
  onMarkerClick(markerElem,item){
   this.content=item;
   this.info.open(markerElem);
  }
}
