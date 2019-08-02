import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location.model';

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) { }

  getBanks(callback: (locations: Location[])=> void): void{
      this.http.get('http://localhost:8080/banks')
               .subscribe(callback);
  }
}