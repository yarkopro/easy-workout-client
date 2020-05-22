import {AfterViewInit, Component} from '@angular/core';
import L from 'leaflet';
/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ew-map',
  templateUrl: 'map.html'
})
export class MapComponent implements AfterViewInit {

  text: string;

  constructor() {
    console.log('Hello MapComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit() {
    // var map = L.map('mapid').setView([49.8356,24.0147], 11);
    //
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //   maxZoom: 18,
    //   id: 'mapbox/streets-v11',
    //   tileSize: 512,
    //   zoomOffset: -1
    // }).addTo(map);
    var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: osmAttrib,
          tileSize: 512,
          zoomOffset: -1
      });

    // initialize the map on the "map" div with a given center and zoom
    var map = L.map('mapid')
      .addLayer(osm)
      .setView([49.8356,24.0147], 12)
  }
}
