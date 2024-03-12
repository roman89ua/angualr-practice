import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShorterPipe } from './custom-pipes/shorter.pipe';
import { FilterByPipe } from './custom-pipes/filter-by.pipe';
import { ReversePipe } from './custom-pipes/reverse';
import { SortCollectionByPipe } from './custom-pipes/sortCollectionBy';

@NgModule({
  declarations: [
    AppComponent,
    ShorterPipe,
    FilterByPipe,
    ReversePipe,
    SortCollectionByPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
