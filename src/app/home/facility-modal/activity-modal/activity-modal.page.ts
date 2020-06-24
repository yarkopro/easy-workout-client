import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../models/activity';
import {RequestService} from '../../../request.service';

@Component({
  selector: 'app-activity-modal',
  templateUrl: './activity-modal.page.html',
  styleUrls: ['./activity-modal.page.scss'],
})
export class ActivityModalPage implements OnInit {

  @Input()
  activity: Activity;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getActivity(this.activity.id)
        // .subscribe(activity => this.activity = activity);
  }

  subscribeToActivity() {

  }
}
