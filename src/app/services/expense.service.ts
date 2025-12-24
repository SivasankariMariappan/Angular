import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private expenses: Expense[] = [];

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  getExpensesByTrip(tripId: number): Expense[] {
    return this.expenses.filter(e => e.tripId === tripId);
  }

  getAllExpenses(): Expense[] {
    return this.expenses;
  }
}
