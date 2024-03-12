import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private currentRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // const serverID: number = +this.currentRoute.snapshot.params['serverId'];
    // this.server = this.serversService.getServer(serverID);
    //
    // this.currentRoute.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['serverId']);
    // });
    this.currentRoute.data.subscribe((data: Data) => {
      console.log(data);
      this.server = data['prefetchedServerData'];
    });
  }

  navigateToEditPage() {
    this.router.navigate(['edit'], {
      relativeTo: this.currentRoute,
      queryParamsHandling: 'preserve',
    });
  }
}
