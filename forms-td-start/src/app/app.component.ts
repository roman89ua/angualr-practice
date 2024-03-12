import {
  Component,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('frm') formReference: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = '';

  genders: string[] = ['female', 'male'];

  suggestUserName() {
    // this.formReference.setValue({
    //   username: 'John Doe',
    //   email: 'some@mail.com',
    //   secret: 'pet',
    //   answer: 'Some answer',
    //   gender: this.genders[0],
    // });
    this.formReference.form.patchValue({
      username: 'John Doe',
    });
  }

  formSubmit(ngForm: NgForm) {
    // console.log(ngForm);
    console.log(this.formReference);
  }
}
