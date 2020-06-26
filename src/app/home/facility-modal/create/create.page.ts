import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../../models/facility';
import {Activity, FacilityActivity} from '../../../models/activity';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
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
      private toastController: ToastController,
      private loadingController: LoadingController,
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

    let loader = this.presentLoading();
    this.requestService.postActivity(activity).subscribe(() => {
      loader.then(loadInstance => loadInstance.dismiss());
      this.dismissModal(activity).then(() => this.presentSuccessToast())
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Відправка нової активності',
    });
    await loading.present();
    return loading;
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Активність була створена успішно',
      color: "success",
      duration: 2000
    });
    toast.present();
  }

  dismissModal(activity: Activity) {
    return this.modalController.dismiss(activity);
  }
}
