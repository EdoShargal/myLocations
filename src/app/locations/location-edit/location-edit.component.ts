import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '../models/location.model';
import { LocalDBService } from '../services/localDB.service';


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
              private localDBService: LocalDBService) { }

  ngOnInit() {
    // Get params from route
    this.route.params.subscribe(
      (param: Params) => {
        // Get id as Number
        let id = Number(param.id)

        // Save current element to local variable
        this.location = this.localDBService.getLocation(id)
        // Get all available categories
        this.categories = this.localDBService.getCategories();
      }
    )
  }

  saveLocation(){
    this.localDBService.saveLocation(this.location)
    this.router.navigate(['locations', 'list'])
  }

}
