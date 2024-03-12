import { EventEmitter, Injectable, Output } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  @Output()
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusChanged = new EventEmitter<{ index: number; status: string }>();
  constructor(private logService: LogService) {}
  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
    this.logService.logOut(
      'A server was created, with status: ' +
        newAccount.status +
        ' and with name: ' +
        newAccount.name,
    );
  }

  onStatusChanged(updateInfo: { index: number; newStatus: string }) {
    this.accounts[updateInfo.index].status = updateInfo.newStatus;
    this.logService.logOut(
      'A server status changed, new status: ' +
        updateInfo.newStatus +
        ' for account with id: ' +
        updateInfo.index,
    );
  }
}
