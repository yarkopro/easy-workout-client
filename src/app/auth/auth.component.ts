import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  constructor(
      public platform: Platform,
      public auth: AuthService
  ) {}

}
