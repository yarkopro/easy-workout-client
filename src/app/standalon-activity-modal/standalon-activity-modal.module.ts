import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandalonActivityModalPageRoutingModule } from './standalon-activity-modal-routing.module';

import { StandalonActivityModalPage } from './standalon-activity-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandalonActivityModalPageRoutingModule
  ],
  declarations: [StandalonActivityModalPage]
})
export class StandalonActivityModalPageModule {}
