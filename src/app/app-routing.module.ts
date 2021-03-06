import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'standalon-activity-modal',
    loadChildren: () => import('./standalon-activity-modal/standalon-activity-modal.module').then( m => m.StandalonActivityModalPageModule)
  },
  {
    path: 'facility-modal',
    loadChildren: () => import('./home/facility-modal/facility-modal.module').then(m => m.FacilityModalPageModule)
  },
  {
    path: 'nearby-facilities-modal',
    loadChildren: () => import('./home/nearby-facilities-modal/nearby-facilities-modal.module').then(m => m.NearbyFacilitiesModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
