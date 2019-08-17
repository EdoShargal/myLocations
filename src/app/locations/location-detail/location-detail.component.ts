import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '../models/location.model';
import { LocationService } from '../services/location.service';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  location: Location

  constructor(private LocalDBService: LocationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Get params from route
    this.route.params.subscribe(
      (param: Params) => {
        // Get id as Number
        let id = Number(param.id)

        //// Save current element to local variable
        //this.location = this.LocalDBService.getLocation(id)
      }
    )
  }
}
