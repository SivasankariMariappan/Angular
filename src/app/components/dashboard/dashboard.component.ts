import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { Trip } from '../../models/trip.model';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  trips: Trip[] = [];
  selectedTrip!: Trip;

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.trips = this.tripService.getTrips();
  }

  get pieChartData(): ChartData<'pie'> {

    if (!this.selectedTrip) {
      return {
        labels: ['Food', 'Travel', 'Stay'],
        datasets: [{ data: [0, 0, 0] }]
      };
    }

    const totals = { Food: 0, Travel: 0, Stay: 0 };

    this.selectedTrip.expenses.forEach(exp => {
      totals[exp.category] += exp.amount;
    });

    return {
      labels: Object.keys(totals),
      datasets: [{ data: Object.values(totals) }]
    };
  }
}
