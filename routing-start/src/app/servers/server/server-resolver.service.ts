import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IResolveServer, ServersService } from '../servers.service';

@Injectable()
export class ServerResolverService implements Resolve<IResolveServer> {
  constructor(private serverService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<IResolveServer> | Promise<IResolveServer> | IResolveServer {
    return this.serverService.getServer(+route.params['serverId']);
  }
}

export const ServerResolverFunction: ResolveFn<IResolveServer> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const serverService: ServersService = inject(ServersService);
  // console.log('state', state);
  // console.log('route', route);
  return serverService.getServer(+route.params['serverId']);
};
