import {AfterViewInit, Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import L from "leaflet";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ngAfterViewInit() {
    var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: osmAttrib,
        // tileSize: 512,
        // zoomOffset: -1
      });

    var map = L.map('mapid')
      .addLayer(osm)
      .setView([49.8356,24.0147], 15)
  }
}
