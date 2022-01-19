import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  addNumbers(number1: number, number2: number): number {
    return +number1 + +number2;
  }

  evenOrOdd(number: number): string {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

  getPrimes(): number[] {
    const arr = [2];
    let i = 3;
    while (arr.length < 10) {
      if (this.isPrime(i)) {
        arr.push(i);
      }
      i++;
    }
    return arr;
  }

  private isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
