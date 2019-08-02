import { Injectable } from '@angular/core';
import { LocationService } from './location.service';
import { Location } from '../models/location.model'

@Injectable()
export class LocalStorageService{

    // _db: any = null

    // constructor(private locationService: LocationService){
    //     if(this._db == null){
    //         this.locationService.getBanks(
    //             locations => this._db = Array(locations)
    //         )
    //     }
    // }

    // get db() { 
    //     console.log(this._db)
    //     return this._db
    // }

    // set db(value: string) {
    //     this._db = value
    // }
    saveData(value: Location[]){
        localStorage.setItem("DB", JSON.stringify(value));
    } 

    getData(){
        return JSON.parse(localStorage.getItem("DB"));
    }
}