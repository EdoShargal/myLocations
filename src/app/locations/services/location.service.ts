import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';
import { LocalStorageService } from './localStorage.service';
import { ILocationsDb } from '../interfaces/ILocationsDb';

@Injectable()
export class LocationService implements ILocationsDb {

  _db: Location[]

  constructor(private localStorageService: LocalStorageService) { 
    this._db = this.localStorageService.getData()
  }

  getLocations(): Location[]{
      return this._db;
  }

  getLocation(id: number): Location {
    return this._db.find(location => location.locationId == id)
  }
  getCategories(): number[] {
    return Array.from(new Set(this._db.map(location => location.category)))
  }
  saveLocation(location: Location): void {
    this._db.push(location)
    this.localStorageService.saveData(this._db)
  }
}
