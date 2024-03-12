import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  genders: string[] = ['male', 'female'];
  forbiddenUsernames: string[] = ['Roman', 'Ivan'];
  readonly forbiddenEmails: string[] = ['1@1.com', '2@2.com'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        this.forbiddenNames.bind(this),
        Validators.minLength(3),
      ]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        this.forbiddenEmailValidator.bind(this),
      ),
      gender: new FormControl('male', Validators.required),
      aboutWork: new FormGroup({
        lastPlaceOfWork: new FormControl('', Validators.required),
      }),
    });
    // react on form validation status change
    this.signupForm.statusChanges.subscribe((formStatus: string) => {
      console.log({ formStatus });
    });
    // react on any form field value change
    this.signupForm.valueChanges.subscribe((formValues: string) => {
      console.log({ formValues });
    });

    /*
     * also there are the same status and value change observables for each field separately
     */
    console.log('on init', this.signupForm.value);
  }

  onSubmit() {
    console.log('on submit', this.signupForm);
    console.log('username errors', this.signupForm.get('username').errors);
  }

  forbiddenNames(control: FormControl): { [key: string]: boolean } {
    return this.forbiddenUsernames.includes(control.value)
      ? { forbidden: true }
      : null;
  }

  forbiddenEmailValidator(
    control: FormControl,
  ):
    | Promise<{ [key: string]: boolean } | null>
    | Observable<{ [key: string]: boolean } | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.forbiddenEmails.includes(control.value)) {
          resolve({ forbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
