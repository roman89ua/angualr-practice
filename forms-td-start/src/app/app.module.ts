import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateFormPracticeComponent } from './template-form-practice/template-form-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormPracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
