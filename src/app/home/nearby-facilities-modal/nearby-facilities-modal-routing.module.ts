import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyFacilitiesModalPage } from './nearby-facilities-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyFacilitiesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyFacilitiesModalPageRoutingModule {}
