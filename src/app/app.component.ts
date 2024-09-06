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
    // Reset error message
    this.errorMessage = null;

    // Split the input string by comma and convert to array of numbers
    const numbersArray = this.numbersInput.split(',')
      .map(num => num.trim()) // Trim any extra spaces
      .filter(num => !isNaN(Number(num))) // Filter out non-numeric values
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
