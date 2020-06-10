import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyFacilitiesModalPageRoutingModule } from './nearby-facilities-modal-routing.module';

import { NearbyFacilitiesModalPage } from './nearby-facilities-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyFacilitiesModalPageRoutingModule
  ],
  declarations: [NearbyFacilitiesModalPage]
})
export class NearbyFacilitiesModalPageModule {}
