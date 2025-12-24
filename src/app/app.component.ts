import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent {

  selectedIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url.includes('itinerary')) {
      this.selectedIndex = 1;
    } else  if (this.router.url.includes('expenses')) {
      this.selectedIndex = 2;
    } else if (this.router.url.includes('dashboard')) {
      this.selectedIndex = 3;
    } else {
      this.selectedIndex = 0;
    }
  }

  onTabChange(index: number) {
    if (index === 0) {
      this.router.navigate(['/trips']);
    } else if(index === 1) {
      this.router.navigate(['/itinerary']);
    } else if(index === 2) {
      this.router.navigate(['/expenses']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
