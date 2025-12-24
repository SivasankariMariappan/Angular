import { Component, Input } from '@angular/core';
import { Trip, Expense } from '../../models/trip.model';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html'
})
export class ExpenseTrackerComponent {

  trips: Trip[] = [];
  selectedTrip!: Trip;
  category = 'Food';
  amount!: number;
  description = '';

  categories = ['Food', 'Travel', 'Stay'];


  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.trips = this.tripService.getTrips();  //  get shared data
  }
  
  addExpense() {
    const expense: Expense = {
      id: Date.now(),
      category: this.category as any,
      amount: this.amount,
      description: this.description,
      date: new Date()
    };

    const updatedTrip: Trip = {
      ...this.selectedTrip,
      expenses: [...this.selectedTrip.expenses, expense]
    };

    this.trips = this.trips.map(trip =>
      trip.id === updatedTrip.id ? updatedTrip : trip
    );

    this.tripService.setTrips(this.trips); // update shared data
    this.selectedTrip = updatedTrip;

    this.amount = 0;
    this.description = '';
  }

  get allExpenses(): (Expense & { tripName: string })[] {
  return this.trips.flatMap(trip =>
    trip.expenses.map(exp => ({
      ...exp,
      tripName: trip.destination
    }))
  );
  }
}


