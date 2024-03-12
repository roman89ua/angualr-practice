import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ActivatedService {
  // @Output() isActivated = new EventEmitter<boolean>();
  @Output() isActivated = new Subject<boolean>();
}
