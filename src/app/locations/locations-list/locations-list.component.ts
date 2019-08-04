import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location.model'
import { LocationService } from '../services/location.service';
import { LocalStorageService } from '../services/localStorage.service';
import { UnsubscriptionError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  locations: Location[];

  constructor(private localStoragService: LocalStorageService,
              private locationService: LocationService,
              private router: Router,) { }

  ngOnInit() {
    // Check for first load
    if (this.localStoragService.getData() == undefined) {
      // Get banks from api
      this.locationService.getBanks(
        locations => {
          // Save the response to local variable
          this.locations = locations
          // Save the data in local storage as DB
          this.localStoragService.saveData(this.locations)
        }
      )
    } else {
      // Get data from local storage
      this.locations = this.localStoragService.getData() 
    }
  }

  editLocation(id: number = 0, name: string){
    
  }

  goDetails(id: number){
    this.router.navigate(['locations', 'details', id])
  }

  deleteLocation(id: number){
    // Getting index number of the element
    let index = this.locations.findIndex(x => x.branchId === id)

    // TODO some confirmation before deleting

    // Removeing the element
    this.locations.splice(index, 1); 

    // Save to local storage the new changes 
    this.localStoragService.saveData(this.locations)

    
  }



  

}
