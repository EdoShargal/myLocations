import { Injectable } from '@angular/core';
import { LocationService } from './location.service';
import { Location } from '../models/location.model'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocalStorageService{

    constructor(private http: HttpClient){}
    
    saveData(value: Location[]): void{
        localStorage.setItem("DB", JSON.stringify(value));
    } 

    getData(): Location[]{
        return JSON.parse(localStorage.getItem("DB"));
    }

    getApiData(callback: (locations: Location[])=> void): void{
        this.http.get('http://localhost:8080/banks')
                 .subscribe(callback);
    }
}