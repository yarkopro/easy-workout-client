import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../models/activity';
import {RequestService} from '../../../request.service';
import {AuthService} from '../../../auth/auth.service';
import {ModalController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-activity-modal',
  templateUrl: './activity-modal.page.html',
  styleUrls: ['./activity-modal.page.scss'],
})
export class ActivityModalPage implements OnInit {

  @Input()
  activity: Activity;
  @Input()
  facility: any;

  constructor(private requestService: RequestService,
              private modalController: ModalController,
              private toastController: ToastController,
              public auth: AuthService) { }

  ngOnInit() {
  }

  subscribeToActivity() {
    this.requestService.subscribeToActivity(this.activity.id)
    setTimeout(() => {
      this.activity.userAssignments.push(this.auth.user);
      this.presentSuccessToast()
    }, 500)
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Ви успішно підписались на активність!',
      color: "success",
      duration: 2000
    });
    toast.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
