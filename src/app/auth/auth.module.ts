import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './auth.component';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
  ],
  exports: [
    AuthComponent
  ],
  declarations: [AuthComponent],
  providers: [
      AuthService
  ]
})
export class AuthModule {}
