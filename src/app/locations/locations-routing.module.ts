import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsComponent } from './locations.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';


const routes: Routes = [
  {
    path: 'list',
    component: LocationsListComponent
  },
  {
    path: 'details/:id',
    component: LocationDetailComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }