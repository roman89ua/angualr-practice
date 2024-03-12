import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActionCounterService {
  inactivatedCounter = new EventEmitter<number>();
  activatedCounter = new EventEmitter<number>();
}
