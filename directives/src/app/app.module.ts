import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight/highlite.directive';
import { HighlightWithRenderer2Directive } from './highlight/highlight-with-renderer2.directive';
import { IfNotDirective } from './sructural-directives/if-not.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightWithRenderer2Directive,
    HighlightDirective,
    IfNotDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
