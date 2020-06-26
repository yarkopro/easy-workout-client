import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewFacilityPageRoutingModule } from './new-facility-routing.module';

import { NewFacilityPage } from './new-facility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewFacilityPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewFacilityPage]
})
export class NewFacilityPageModule {}
