import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('primes')
  get10Primes() {
    return this.appService.getPrimes();
  }

  @Get('evenorodd/:number')
  getevenOrOdd(@Param('number') number: number) {
    return this.appService.evenOrOdd(number);
  }

  @Get('add/:number1/:number2')
  addNumbers(
    @Param('number1') number1: number,
    @Param('number2') number2: number,
  ) {
    return this.appService.addNumbers(number1, number2);
  }

  @Get('healthcheck')
  healthcheck(): string {
    return 'OK';
  }
}
