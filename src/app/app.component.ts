import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_assesment';

  numbersInput: string = '';
  sum: number | null = null;
  errorMessage: string | null = null;

  calculateSum(): void {
    this.errorMessage = null;

    const numbersArray = this.numbersInput.split(',')
      .map(num => num.trim()) // Trim any extra spaces
      .filter(num => !isNaN(Number(num))) 
      .map(num => Number(num)); // Convert to numbers

    // Check for negative numbers
    if (numbersArray.some(num => num < 0)) {
      this.errorMessage = 'Negative numbers are not allowed.';
      this.sum = null;
      return;
    }

    // Calculate the sum of the numbers
    this.sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  }

}
