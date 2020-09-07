import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logError(message: string): void {
    console.log(`${new Date()}: ${message}`);
  }
}
