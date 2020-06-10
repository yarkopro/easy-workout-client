import {Component, Input, OnInit} from '@angular/core';
import {Facility} from '../../models/facility';
import {facilityTypesDefinition} from '../../models/facility-type';
import {RequestService} from '../../request.service';
import {ModalController} from '@ionic/angular';
import {Coords} from '../../models/coords';
import {FacilityModalPage} from '../facility-modal/facility-modal.page';

@Component({
  selector: 'app-nearby-facilities-modal',
  templateUrl: './nearby-facilities-modal.page.html',
  styleUrls: ['./nearby-facilities-modal.page.scss'],
})
export class NearbyFacilitiesModalPage implements OnInit {

  @Input()
  coords: Coords;

  facilities: Facility[];
  facDefs = facilityTypesDefinition;

  constructor(private requestService: RequestService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.requestService.getNearbyFacilities(this.coords)
        .subscribe(facilities => this.facilities = facilities);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async openFacility(facility: Facility) {
    const modal = await this.modalController.create({
      component: FacilityModalPage,
      swipeToClose: true,
      componentProps: {
        'facilityId': facility.id,
      }
    });
    return await modal.present();
  }
}
