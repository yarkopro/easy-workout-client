import {Component, Input, OnInit} from '@angular/core';
import {FacilityModalPage} from '../../facility-modal/facility-modal.page';
import {ModalController, PopoverController} from '@ionic/angular';
import {Facility} from '../../models/facility';
import {facilityTypesDefinition} from '../../models/facility-type';
import {RequestService} from '../../request.service';

@Component({
  selector: 'app-facility-popover',
  templateUrl: './facility-popover.component.html',
  styleUrls: ['./facility-popover.component.scss'],
})
export class FacilityPopoverComponent implements OnInit {

  @Input()
  facilityId: number;

  facility: Facility;

  facDefs = facilityTypesDefinition;

  constructor(private requestService: RequestService,
              private popoverController: PopoverController,
              private modalController: ModalController) { }

  ngOnInit() {
    this.requestService.getFacility(this.facilityId)
        .subscribe(facility => this.facility = facility);
  }

  dismissPopover() {
    this.popoverController.dismiss();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FacilityModalPage,
      swipeToClose: true,
      componentProps: {
        'facility': this.facility,
      }
    });
    return await modal.present();
  }
}
