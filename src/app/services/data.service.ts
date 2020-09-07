import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject({});
  currentData = this.data.asObservable();

  constructor() { }

  nextData(data: any): void {
    this.data.next(data);
  }
}
