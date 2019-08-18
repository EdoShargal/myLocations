import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationEditComponent } from './location-edit/location-edit.component';


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
    path: 'edit/:id',
    component: LocationEditComponent
  },
  {
    path: 'new/:id',
    component: LocationEditComponent
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