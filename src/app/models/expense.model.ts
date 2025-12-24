export interface Expense {
  tripId: number;
  category: 'Food' | 'Travel' | 'Stay';
  amount: number;
  description: string;
  date: Date;
}
