import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { AuthGard } from './auth-guard';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import {
  ServerResolverFunction,
  ServerResolverService,
} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
    // canActivate: [AuthGard],
    canActivateChild: [AuthGard],
    children: [
      {
        path: ':userId/:userName',
        component: UserComponent,
      },
      // { path: '**', redirectTo: 'page-not-found' }, // not working
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: ':serverId',
        component: ServerComponent,
        // resolve: { prefetchedServerData: ServerResolverService },
        resolve: { prefetchedServerData: ServerResolverFunction },
      },
      {
        path: ':serverId/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  // { path: 'page-not-found', component: PageNotFoundComponent },
  {
    path: 'page-not-found',
    component: ErrorPageComponent,
    data: { errorMessage: 'PAGE NOT FOUND! ' },
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
