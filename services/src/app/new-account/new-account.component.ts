import { Component, OnDestroy } from '@angular/core';
import { LogService } from '../services/log.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogService],
})
export class NewAccountComponent implements OnDestroy {
  constructor(private accountsService: AccountsService) {
    this.accountsService.statusChanged.subscribe(({ status, index }) => {
      alert('Status from constructor: ' + status + '. Account index: ' + index);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded({
      name: accountName,
      status: accountStatus,
    });
  }

  ngOnDestroy() {
    this.accountsService.statusChanged.unsubscribe();
  }
}
