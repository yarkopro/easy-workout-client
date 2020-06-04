import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacilityModalPageRoutingModule } from './facility-modal-routing.module';

import { FacilityModalPage } from './facility-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacilityModalPageRoutingModule
  ],
  declarations: [FacilityModalPage]
})
export class FacilityModalPageModule {}
