import { Component } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent {

  trips: Trip[] = [];
  selectedTrip!: Trip;

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.trips = this.tripService.getTrips();
    this.selectedTrip = this.trips[0]; // default
  }
}