import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActionCounterService } from '../services/action-counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: string[];
  inactivatedUsersCounter = 0;

  constructor(
    private usersService: UsersService,
    private actioncCounterService: ActionCounterService
  ) {}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.inactivatedUsersCounter++;
    this.actioncCounterService.inactivatedCounter.emit(
      this.inactivatedUsersCounter
    );
  }
}
