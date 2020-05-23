import {AfterViewInit, Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import L, {Marker, Map} from "leaflet";
import {RequestProvider} from "../../providers/request/request";
import {Tick} from "../../models/tick";
import {Coords} from "../../models/coords";
import { Geolocation } from '@ionic-native/geolocation/ngx';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage implements AfterViewInit {

  private map: Map;
  private ticks: Marker[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geolocation: Geolocation,
              private request: RequestProvider) {
  }

  ionViewDidLoad() {

  }

  ngAfterViewInit() {
    this.initializeMap();
    this.fetchTicks().then(ticks => {
      this.showTicks(ticks);
    })
  }

  private initializeMap() {
    var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: osmAttrib,
      });

    this.map = L.map('mapid')
      .addLayer(osm)
      .setView([49.8356, 24.0147], 15)
  }

  fetchTicks(): Promise<Tick[]> {
    return this.request.getTicks().toPromise();
  }

  private showTicks(ticks: Tick[]) {
    ticks.forEach(tick => {
      let lat = Number.parseFloat(tick.coordinates.latitude);
      let lng = Number.parseFloat(tick.coordinates.longitude);
      let marker = L.marker([lat, lng], {draggable: false});
      this.ticks.push(marker)
      marker.addTo(this.map);
    })
  }
  // locatePosition(){
  //   this.map.locate({setView:true}).on("locationfound", (e: any)=> {
  //     this.newMarker = this.marker([e.latitude,e.longitude], {draggable:
  //         true}).addTo(this.map);
  //     this.newMarker.bindPopup("You are located here!").openPopup();
  //
  //     this.newMarker.on("dragend", ()=> {
  //       const position = this.newMarker.getLatLng();
  //     });
  //   });
  // }

  getCurrentLocation(): Promise<any> {
    return this.geolocation.getCurrentPosition().then((resp) => {
      return {
        latitude: resp.coords.latitude.toString(),
        longitude: resp.coords.longitude.toString()
      }
    }).catch((error) => console.log(error))
  }

  locationClicked() {
    this.getCurrentLocation().then(coords => this.map.setView([
      Number.parseFloat(coords.latitude),
      Number.parseFloat(coords.longitude)
    ], 15))
  }
}
