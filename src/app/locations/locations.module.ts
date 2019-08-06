import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsComponent } from './locations.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationService } from './services/location.service';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocalStorageService } from './services/localStorage.service';
import { LocalDBService } from './services/localDB.service';
import { AgmCoreModule } from '@agm/core';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LocationsListComponent,
    LocationsComponent,
    LocationDetailComponent,
    LocationEditComponent
  ],
  exports: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDO1akQb8EyZDe5TRZSF913MZDjnnswKEo'
    })
  ],
  providers: [
    LocationService,
    LocalStorageService,
    LocalDBService
  ]
})
export class LocationsModule { }
