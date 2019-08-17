import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location.model'
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  locations: Location[];

  constructor(private locationService: LocationService,
              private router: Router,) { }

  ngOnInit() {
    this.locations = this.locationService.getLocations()
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
    //this.localStoragService.saveData(this.locations)

    
  }



  

}
