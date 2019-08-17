import { Location } from '../models/location.model';

export interface ILocationsDb {
    getLocations(): Location[]
    getLocation(id: number): Location
    getCategories(): number[]
    saveLocation(location: Location): void
}