import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../../models/facility';
import {FacilityActivity} from '../../../models/activity';
import {ModalController} from '@ionic/angular';
import {RequestService} from '../../../request.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  fg: FormGroup;

  @Input()
  facility: Facility;

  constructor(
      private formBuilder: FormBuilder,
      private requestService: RequestService,
      private modalController: ModalController,
  ) {
    this.fg = this.formBuilder.group({
      name: [``, Validators.compose([Validators.required, Validators.maxLength(40)])],
      description: [``],
      time: [``, Validators.required]
    })
  }

  ngOnInit() {
  }

  logForm() {
    let activity = new FacilityActivity();
    activity.facility = this.facility;
    activity.name = this.fg.value.name
    activity.description = this.fg.value.description;
    activity.time = this.fg.value.time;

    this.requestService.postActivity(activity).subscribe(() => {})
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
