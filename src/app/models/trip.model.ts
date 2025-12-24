export interface Expense {
  id: number;
  category: 'Food' | 'Travel' | 'Stay';
  amount: number;
  description: string;
  date: Date;
}

export interface Trip {
  id: number;
  destination: string;
  startDate: Date;
  endDate: Date;
  activities: string[];
  expenses: Expense[];
}
