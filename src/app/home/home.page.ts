import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import L, {LatLngExpression, Marker} from 'leaflet';
import {Tick} from '../models/tick';
import {RequestService} from '../request.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ModalController, NavController, PopoverController} from '@ionic/angular';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import {FacilityPopoverComponent} from './facility-popover/facility-popover.component';
import {NearbyFacilitiesModalPage} from './nearby-facilities-modal/nearby-facilities-modal.page';
import {Coords} from '../models/coords';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('leafletMap')
  private mapContainer: ElementRef;
  private map;
  private ticks: Marker[] = [];
  private currentLocationMarker: Marker<any>;

  constructor(private modalController: ModalController,
              public navCtrl: NavController,
              private popoverController: PopoverController,
              private geolocation: Geolocation,
              private request: RequestService) {
  }

  ngAfterViewInit() {
    this.initializeMap();
  }

  private DEFAULT_CENTER = [49.8356, 24.0147];

  private initializeMap() {
    var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {
          maxZoom: 18,
          minZoom: 2,
          attribution: osmAttrib,
          // tileSize: 512
        });

    this.map = L.map('mapid')
        .addLayer(osm)
        .setView(this.DEFAULT_CENTER as LatLngExpression, 14)
        .whenReady(() => {
          setTimeout(async () => {
            this.map.invalidateSize();
            this.fetchTicks().then(ticks => {
              this.showTicks(ticks);
            });
          }, 0);
        })
  }

  fetchTicks(): Promise<Tick[]> {
    return this.request.getTicks().toPromise();
  }

  private showTicks(ticks: Tick[]) {
    let self = this;
    let onTickClick = function(e) {
      self.presentFacilityPopover(e.originalEvent, this);
    }
    ticks.forEach(tick => {
      let lat = Number.parseFloat(tick.coords.latitude);
      let lng = Number.parseFloat(tick.coords.longitude);
      let marker = L.marker([lat, lng]).addTo(this.map).on('click', onTickClick, tick);
      this.ticks.push(marker)
    })
  }

  async presentFacilityPopover(event: any, tick: Tick) {
    const popover = await this.popoverController.create({
      component: FacilityPopoverComponent,
      componentProps: {
        'facilityId': tick.entityId,
      },
      event: event,
      translucent: true
    });
    return await popover.present();
  }

  getCurrentLocation(): Promise<any> {
    return this.geolocation.getCurrentPosition().then((resp) => {
      let latitude = resp.coords.latitude.toString();
      return {
        latitude: latitude,
        longitude: resp.coords.longitude.toString()
      }
    }).catch((error) => console.log(error))
  }

  locationClicked() {
    this.getCurrentLocation().then(coords => {
      this.setLocationMarker(coords);
      this.map.setView([
        Number.parseFloat(coords.latitude),
        Number.parseFloat(coords.longitude)
      ], 15)
      setTimeout(() => this.presentNearbyFacilitiesModal(coords), 700);
    })
  }

  setLocationMarker(coords: Coords) {
    let lat = Number.parseFloat(coords.latitude);
    let lng = Number.parseFloat(coords.longitude);
    let marker = L.marker([lat, lng],{icon: greenIcon}).addTo(this.map);
    this.currentLocationMarker && this.currentLocationMarker.remove();
    this.currentLocationMarker = marker;
  }

  async presentNearbyFacilitiesModal(coords: Coords) {
    const modal = await this.modalController.create({
      component: NearbyFacilitiesModalPage,
      swipeToClose: true,
      componentProps: {
        'coords': coords,
      }
    });
    modal.onWillDismiss()
        .then(() => this.currentLocationMarker.remove())
    return await modal.present();
  }
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

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var currentIcon = new L.Icon({
  iconUrl: '../../assets/icon/current-location-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var blueIcon  = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
