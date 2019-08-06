import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location.model'
import { Router } from '@angular/router';
import { LocalDBService } from '../services/localDB.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  locations: Location[];

  constructor(private localSBService: LocalDBService,
              private router: Router,) { }

  ngOnInit() {
    // // Check for first load
    // if (this.localStoragService.getData() == undefined) {
    //   // Get banks from api
    //   this.locationService.getBanks(
    //     locations => {
    //       // Save the response to local variable
    //       this.locations = locations
    //       // Save the data in local storage as DB
    //       this.localStoragService.saveData(this.locations)
    //     }
    //   )
    // } else {
    //   // Get data from local storage
    //   this.locations = this.localStoragService.getData() 
    // }
    this.locations = this.localSBService.getLocations()
  }

  editLocation(id: number = 0){
    this.router.navigate(['locations', 'edit', id])
  }

  goToMap(id: number){
    this.router.navigate(['locations', 'details', id])
  }

  deleteLocation(id: number){
    // Getting index number of the element
    let index = this.locations.findIndex(x => x.locationId === id)

    // TODO some confirmation before deleting

    // Removeing the element
    this.locations.splice(index, 1); 

    // Save to local storage the new changes 
    this.localStoragService.saveData(this.locations)

    
  }



  

}
