import { Injectable } from "@angular/core";

@Injectable()
export class RealLoggerService {
    Info(message: string): void {
        console.log(`log from Production service: ${message}`);
    }
}