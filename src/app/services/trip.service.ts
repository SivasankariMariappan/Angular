import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({ providedIn: 'root' })
export class TripService {
  private trips: Trip[] = [];

  getTrips(): Trip[] {
    return this.trips;
  }

  addTrip(trip: Trip) {
    this.trips.push(trip);
  }
  
  setTrips(trips: Trip[]) {
    this.trips = trips;
  }
}
