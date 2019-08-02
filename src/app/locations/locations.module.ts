import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationService } from './services/location.service';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocalStorageService } from './services/localStorage.service';



@NgModule({
  declarations: [
    LocationsListComponent,
    LocationsComponent,
    LocationDetailComponent
  ],
  exports: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
  ],
  providers: [
    LocationService,
    LocalStorageService
  ]
})
export class LocationsModule { }
