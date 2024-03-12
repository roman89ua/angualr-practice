import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActionCounterService } from '../services/action-counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  activatedUsersCounter = 0;
  constructor(
    private usersService: UsersService,
    private actioncCounterService: ActionCounterService
  ) {}

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.activatedUsersCounter++;
    this.actioncCounterService.activatedCounter.emit(
      this.activatedUsersCounter
    );
  }
}
