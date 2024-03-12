import {
  AfterContentChecked,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentChecked {
  inputValue: string = '';
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 9];
  isOnlyOddNumbers: boolean = false;
  switchValue: number = this.inputValue.length;

  value = signal('');
  getNeededNumbers() {
    const variable = signal(this.inputValue);
    return this.isOnlyOddNumbers
      ? this.numbers.filter((n) => n % 2 === 0)
      : this.numbers.filter((n) => n % 2 === 1);
  }
  ngAfterContentChecked(): void {
    this.switchValue = this.inputValue.length;
  }

  onChangeValue(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.value.set(value);
  }

  users = signal<{ id: number; name: string }[]>([]);

  onAddUser() {
    if (!this.users().length) {
      this.users.set([
        {
          id: 1,
          name: this.value(),
        },
      ]);
    } else {
      this.users.update((prevUsers) => [
        ...prevUsers,
        {
          id: prevUsers.at(-1).id + 1,
          name: this.value(),
        },
      ]);
    }
    this.value.set('');
  }

  usersCount = computed(() => this.users().length);

  twoFieldChangeEffect = effect(() => {
    console.log(this.value());
  });
}
