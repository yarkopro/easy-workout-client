import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../models/activity';
import {RequestService} from '../../../request.service';
import {AuthService} from '../../../auth/auth.service';

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
              public auth: AuthService) { }

  ngOnInit() {
  }

  subscribeToActivity() {
    this.requestService.subscribeToActivity(this.activity.id)
  }
}
