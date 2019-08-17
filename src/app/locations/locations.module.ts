import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocalStorageService } from './services/localStorage.service';
import { LocationEditComponent } from './location-edit/location-edit.component';

import { AgmCoreModule } from '@agm/core';
import { LocationService } from './services/location.service';



@NgModule({
  declarations: [
    LocationsListComponent,
    LocationDetailComponent,
    LocationEditComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'your-id'
    })
  ],
  providers: [
    LocalStorageService,
    LocationService
  ]
})
export class LocationsModule { }
