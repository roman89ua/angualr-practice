import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent
  implements OnInit, OnDestroy, CanComponentDeactivate
{
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  private routerChangeSubscription: Subscription;
  private queryParamsSubscription: Subscription;
  isEditAllowed: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private currentUrl: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const currentServerId: number = this.currentUrl.snapshot.params['serverId'];

    this.getServerById(+currentServerId);

    this.routerChangeSubscription = this.currentUrl.params.subscribe(
      (params: Params) => {
        this.getServerById(+params['serverId']);
      },
    );
    this.queryParamsSubscription = this.currentUrl.queryParams.subscribe(
      (queryParams: Params) => {
        this.isEditAllowed = JSON.parse(queryParams['allowEdit']);
      },
    );
  }
  ngOnDestroy() {
    this.routerChangeSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.isEditAllowed) {
      return true;
    }
    if (
      (this.server.name !== this.serverName ||
        this.server.status !== this.serverStatus) &&
      !this.changesSaved
    ) {
      return confirm('Do you really want to leave those changes unsaved?');
    } else {
      return true;
    }
  }
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });

    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.currentUrl });
  }

  private getServerById(serverId: number) {
    this.server = this.serversService.getServer(serverId);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
}
