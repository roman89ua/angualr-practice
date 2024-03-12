import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: AppModule,
})
export class LogService {
  logOut(status: string) {
    console.log(new Date() + ' ' + status);
  }
}
