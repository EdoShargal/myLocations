import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsListComponent } from '../locations-list/locations-list.component';


const routes: Routes = [
  {
    path: '',
    component: LocationsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }