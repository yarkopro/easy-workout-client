import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from '../../request.service';
import {Facility} from '../../models/facility';
import {facilityTypesDefinition} from '../../models/facility-type';
import {ModalController} from '@ionic/angular';
import {ActivityModalPage} from './activity-modal/activity-modal.page';
import {Activity} from '../../models/activity';

@Component({
  selector: 'app-facility-modal',
  templateUrl: './facility-modal.page.html',
  styleUrls: ['./facility-modal.page.scss'],
})
export class FacilityModalPage implements OnInit {

  @Input()
  facilityId: number;
  @Input()
  facility: Facility;

  facDefs = facilityTypesDefinition;

  constructor(private requestService: RequestService,
              private modalController: ModalController) { }

  ngOnInit() {
    if (!this.facility) {
      this.requestService.getFacility(this.facilityId)
          .subscribe(facility => this.facility = facility);
    }
  }

  async presentActivityModal(activity: Activity) {
    const modal = await this.modalController.create({
      component: ActivityModalPage,
      swipeToClose: true,
      componentProps: {
        'activity': activity,
      }
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  presentNewActivityModal() {

  }
}
