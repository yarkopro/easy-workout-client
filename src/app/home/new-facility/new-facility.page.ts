import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../../request.service';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
import {Facility} from '../../models/facility';
import {facilityTypesDefinition} from '../../models/facility-type';

@Component({
  selector: 'app-new-facility',
  templateUrl: './new-facility.page.html',
  styleUrls: ['./new-facility.page.scss'],
})
export class NewFacilityPage implements OnInit {

  fg: FormGroup;

  facDefs = facilityTypesDefinition;

  constructor(
      private formBuilder: FormBuilder,
      private toastController: ToastController,
      private loadingController: LoadingController,
      private requestService: RequestService,
      private modalController: ModalController,
  ) {
    this.fg = this.formBuilder.group({
      name: [``, Validators.compose([Validators.required, Validators.maxLength(40)])],
      description: [``],
      type: [``, Validators.required]
    })
  }

  ngOnInit() {
  }

  logForm() {
    let facility = new Facility();
    facility.name = this.fg.value.name
    facility.description = this.fg.value.description;
    let loader = this.presentLoading()
    this.requestService.postFacility(facility).subscribe(async () => {
      (await loader).dismiss();
      this.dismissModal()
          .then(() => this.presentSuccessToast())
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Відправка нового об\'єкту',
    });
    await loading.present();
    return loading;
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Об\'єкт був створений успішно',
      color: "success",
      duration: 2000
    });
    toast.present();
  }

  dismissModal() {
    return this.modalController.dismiss();
  }
}
