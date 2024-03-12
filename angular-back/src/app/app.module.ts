import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NotificationMessageToggleComponent } from './notification-message-toggle/notification-message-toggle.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessBlockComponent } from './success-block/success-block.component';
import { WarningBlockComponent } from './warning-block/warning-block.component';
import { FormsModule } from '@angular/forms';
import { PracticeN2Component } from './practice-n2/practice-n2.component';
import { PracticeN3Component } from './practice-n3/practice-n3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NotificationMessageToggleComponent,
    SuccessBlockComponent,
    WarningBlockComponent,
    PracticeN2Component,
    PracticeN3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
