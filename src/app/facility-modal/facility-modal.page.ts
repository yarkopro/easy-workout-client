import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from '../request.service';
import {Facility} from '../models/facility';
import {facilityTypesDefinition} from '../models/facility-type';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-facility-modal',
  templateUrl: './facility-modal.page.html',
  styleUrls: ['./facility-modal.page.scss'],
})
export class FacilityModalPage implements OnInit {

  @Input()
  facilityId: number;
  facility: Facility;

  facDefs = facilityTypesDefinition;

  constructor(private requestService: RequestService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.requestService.getFacility(this.facilityId)
        .subscribe(facility => this.facility = facility);
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
