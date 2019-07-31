import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsRoutingModule } from './locations/locations-routing.module';



@NgModule({
  declarations: [
    LocationsListComponent,
    LocationsComponent
  ],
  exports: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
