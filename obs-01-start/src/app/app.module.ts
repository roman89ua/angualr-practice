import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ActivatedService } from './activated.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ActivatedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
