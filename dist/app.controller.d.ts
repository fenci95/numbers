import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    get10Primes(): number[];
    getevenOrOdd(number: number): string;
    addNumbers(number1: number, number2: number): number;
    healthcheck(): string;
}
