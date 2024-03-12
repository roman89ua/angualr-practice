import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

type StatusType = 'Critical' | 'Stable' | 'Finished';
@Component({
  selector: 'app-reactive-forms-practice',
  templateUrl: './reactive-forms-practice.component.html',
  styleUrls: ['./reactive-forms-practice.component.css'],
})
export class ReactiveFormsPracticeComponent implements OnInit {
  form: FormGroup<{
    projectName: FormControl<string>;
    email: FormControl<string>;
    status: FormControl<StatusType>;
  }>;
  forbiddenProjectNames: string[] = ['Test'];

  statusOptions: StatusType[] = ['Critical', 'Stable', 'Finished'];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl<string>(
        '',
        Validators.required,
        this.forbiddenProjectsValidator.bind(this),
      ),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      status: new FormControl<StatusType>('Stable', Validators.required),
    });

    console.log(this.form);
  }

  onSubmitForm() {
    console.log(this.form.value);
    this.form.reset();
  }

  forbiddenProjectsValidator(
    control: FormControl,
  ):
    | Promise<{ forbidden: true } | null>
    | Observable<{ forbidden: true } | null> {
    return new Promise((resolve, reject) => {
      if (this.forbiddenProjectNames.includes(control.value)) {
        setTimeout(() => {
          resolve({ forbidden: true });
        }, 1000);
      } else {
        setTimeout(() => {
          resolve(null);
        }, 1000);
      }
    });
  }
}
