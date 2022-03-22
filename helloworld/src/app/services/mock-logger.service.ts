import { Injectable } from "@angular/core";

@Injectable()
export class MockLoggerService {
    Info(message: string): void {
        console.log(`log from mock service: ${message}`);
    }
}