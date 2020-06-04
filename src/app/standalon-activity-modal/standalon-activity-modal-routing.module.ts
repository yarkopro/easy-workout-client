import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandalonActivityModalPage } from './standalon-activity-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StandalonActivityModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandalonActivityModalPageRoutingModule {}
