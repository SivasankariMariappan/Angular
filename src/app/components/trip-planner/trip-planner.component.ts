import { Component } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip.model';

/*interface Trip {
  id: number;
  destination: string;
  startDate: Date;
  endDate: Date;
  activities: string[];
}*/

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent {

  destination = '';
  startDate!: Date;
  endDate!: Date;
  activities = '';
  today: Date = new Date();
  trips: Trip[] = [];             
  displayedColumns: string[] = [
    'destination',
    'startDate',
    'endDate',
    'activities'
  ];

  constructor(private tripService: TripService) {}

  addTrip() {
    const newTrip: Trip = {
      id: Date.now(),
      destination: this.destination,
      startDate: this.startDate,
      endDate: this.endDate,
      activities: this.activities.split(',').map(a => a.trim()),
      expenses: []
    };

    this.trips = [...this.trips, newTrip];

    this.tripService.addTrip(newTrip);

    // Reset form
    this.destination = '';
    this.activities = '';
    this.startDate = undefined!;
    this.endDate = undefined!;

    console.log("Trip added:", this.trips);
  }
}
