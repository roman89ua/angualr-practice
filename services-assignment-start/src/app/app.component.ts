import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { ActionCounterService } from './services/action-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];
  activateActionsCount: number = 0;
  deactivateActionsCount: number = 0;
  constructor(
    private usersService: UsersService,
    private countService: ActionCounterService
  ) {}

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.activeUsers = this.usersService.activeUsers;
    this.countService.activatedCounter.subscribe((count) => {
      this.activateActionsCount = count;
    });
    this.countService.inactivatedCounter.subscribe((count) => {
      this.deactivateActionsCount = count;
    });
  }
}
