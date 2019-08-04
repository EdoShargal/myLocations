import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';
import { LocalStorageService } from './localStorage.service';

@Injectable()
export class LocalDBService {

  constructor(private localStorageService: LocalStorageService) { }

  getLocation(id: number): Location{
    // Get current Db
    let db = this.localStorageService.getData()

    // Find index of current element
    let index = db.findIndex(location=>location.branchId === id)
 
    return db[index];
  }
  
}