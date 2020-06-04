import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import L, {Marker} from 'leaflet';
import {Tick} from '../models/tick';
import {RequestService} from '../request.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {ModalController} from '@ionic/angular';
import {FacilityModalPage} from '../facility-modal/facility-modal.page';


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

  constructor(private modalController: ModalController,
              private geolocation: Geolocation,
              private request: RequestService) {
  }

  ngAfterViewInit() {
    this.initializeMap();
    this.fetchTicks().then(ticks => {
      this.showTicks(ticks);
    });
    this.mapContainer.nativeElement.addEventListener('leafletMapReady', () => console.log("ready"))
    this.presentModal(1);
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
        .whenReady(() => {
          setTimeout(() => {
            this.map.invalidateSize();
          }, 0);
        })
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
    this.getCurrentLocation().then(coords => this.map.setView([
      Number.parseFloat(coords.latitude),
      Number.parseFloat(coords.longitude)
    ], 15))
  }

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }

  async presentModal(facilityId: number) {
    const modal = await this.modalController.create({
      component: FacilityModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'facilityId': facilityId,
      }
      // presentingElement: await this.modalCtrl.getTop() // Get the top-most ion-modal
    });
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
