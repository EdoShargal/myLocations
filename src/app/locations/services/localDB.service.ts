import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Location } from '../models/location.model';
import { LocalStorageService } from './localStorage.service';
import { ILocationsDb } from '../interfaces/ILocationsDb';

@Injectable()
export class LocalDBService implements ILocationsDb {

  private _locationDB: Location[];

  constructor(private localStorageService: LocalStorageService) {
    // Check for first load
    if (this.localStorageService.getData() == undefined) {
      // Get banks locations from api
      this.localStorageService.getApiData(
        locations => {
          // Save the response to local private variable
          this._locationDB = locations
          // Save the data in local storage as DB
          this.localStorageService.saveData(this._locationDB)
        }
      )
    } else {
      // Get data from local storage
      this._locationDB = this.localStorageService.getData() 
    }
  }
  getLocations(): Location[] {
    return this._locationDB;
  }

  getLocation(id: number): Location {
    // Get current Db
    let db = this.localStorageService.getData()

    // Find index of current element
    let index = db.findIndex(location => location.locationId === id)

    return db[index];
  }

  getCategories(): number[] {

    let result = new Set<number>()
    // Get current Db
    let db = this.localStorageService.getData()

    db.forEach(location => result.add(location.category));

    return Array.from(result);
  }

  saveLocation(location: Location): void {
    // Get current Db
    let db = this.localStorageService.getData()

    // get index of the element
    let index = db.findIndex(element=> element.locationId == location.locationId)

    // Check if location id exist
    if (index === -1) {

      // Create uinque id
      location.locationId = Number(location.bankCode + location.brancCode)

      // Add the new location into the db
      db.push(location);
    } else {

      // Edit the element
      db[index].name = location.name
      db[index].address = location.address
      db[index].latitude = location.latitude
      db[index].longitude = location.longitude
      db[index].category = location.category
      db[index].bankCode = location.bankCode
      db[index].brancCode = location.brancCode
      //db[index].locationId = Number(location.bankCode + location.brancCode)
    }
    this.localStorageService.saveData(db)
  }
}