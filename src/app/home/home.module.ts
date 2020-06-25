import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {FacilityPopoverComponent} from './facility-popover/facility-popover.component';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AuthModule,
  ],
  declarations: [HomePage, FacilityPopoverComponent]
})
export class HomePageModule {}
