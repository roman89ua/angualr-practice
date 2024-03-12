import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-practice',
  templateUrl: './template-form-practice.component.html',
  styleUrls: ['./template-form-practice.component.css'],
})
export class TemplateFormPracticeComponent implements OnInit {
  subscriptionTypes: string[] = ['Advance', 'Basic', 'Pro'];
  defaultSubscriptionType: string = this.subscriptionTypes[0];
  output: {
    email: string;
    password: string;
    subscriptionType: string;
  } = { email: '', password: '', subscriptionType: '' };
  wasSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  formSubmit(practiceForm: NgForm) {
    this.wasSubmitted = true;
    this.output = practiceForm.value;
    console.log(practiceForm.value);
    practiceForm.reset();
  }
}
