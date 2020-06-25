import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacilityModalPage } from './facility-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FacilityModalPage
  },
  {
    path: 'activity-modal',
    loadChildren: () => import('./activity-modal/activity-modal.module').then( m => m.ActivityModalPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilityModalPageRoutingModule {}
