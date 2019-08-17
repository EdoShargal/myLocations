import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocalStorageService } from './services/localStorage.service';
import { LocalDBService } from './services/localDB.service';
import { LocationEditComponent } from './location-edit/location-edit.component';

import { AgmCoreModule } from '@agm/core';



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
    LocalDBService
  ]
})
export class LocationsModule { }
