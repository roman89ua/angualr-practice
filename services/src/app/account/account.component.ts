import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogService } from '../services/log.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() index: number;

  constructor(private accountService: AccountsService) {}
  onSetTo(status: string) {
    this.accountService.onStatusChanged({
      index: this.index,
      newStatus: status,
    });
    this.accountService.statusChanged.emit({ index: this.index, status });
  }
}
