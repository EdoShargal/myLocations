import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '../models/location.model';
import { LocationService } from '../services/location.service';


@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  location: Location
  categories: number[]

  constructor(private route: ActivatedRoute,
              private router: Router,
              private locationService: LocationService) { }

  ngOnInit() {
    // Get params from route
    this.route.params.subscribe(
      (param: Params) => {
        // Get id as Number
        let id = Number(param.id)

        if(id === 0) {
          this.location = new Location("", "", 0, 0, 0, 0, "0", "0")
        } else {
          // Save current element to local variable
          this.location = this.locationService.getLocation(id)
        }
        
        // Get all available categories
        this.categories = this.locationService.getCategories();
      }
    )
  }

  saveLocation(){
    // Save Location
    this.locationService.saveLocation(this.location);
    // Navigate back to location list 
    this.router.navigate(["/locations", "list"])
  }

}
