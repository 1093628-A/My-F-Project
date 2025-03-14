import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  amount: number = 0;
  exchangeRate: number = 1;
  convertedAmount: number = 0;

  convert() {
    this.convertedAmount = this.amount * this.exchangeRate;
  }
}
