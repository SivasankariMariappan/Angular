import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripPlannerComponent } from './components/trip-planner/trip-planner.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { ExpenseTrackerComponent } from './components/expense-tracker/expense-tracker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  { path: 'trips', component: TripPlannerComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'expenses', component: ExpenseTrackerComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
