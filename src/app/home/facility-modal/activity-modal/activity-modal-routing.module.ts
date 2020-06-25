import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityModalPage } from './activity-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityModalPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityModalPageRoutingModule {}
