import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location.model'
import { LocationService } from '../services/location.service';
import { LocalStorageService } from '../services/localStorage.service';
import { UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  locations: Location[];

  constructor(private localStoragService: LocalStorageService,
              private locationService: LocationService) { }

  ngOnInit() {
    if (this.localStoragService.getData() == undefined) {
      this.locationService.getBanks(
        locations => {
          this.locations = locations
          this.localStoragService.saveData(this.locations)
          console.log(this.locations);
        }
      )
      
      
      //onsole.log(this.localStoragService.getData())
    } else {
      this.locations = this.localStoragService.getData() 
      //this.localStoragService.saveData(this.locations); 
    }
  }

  editLocation(id: number = 0){
    console.log(id)
  }

  goDetails(id: number){
    console.log(id);
  }

  deleteLocation(id: number){

  }



  

}
