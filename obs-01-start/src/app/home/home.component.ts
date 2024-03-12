import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countValue = 0;
  countSubscription: Subscription;
  errorMessage: string = '';

  constructor() {}

  ngOnInit() {
    // this.countSubscription = interval(1000).subscribe((nextValue) => {
    //   console.log(nextValue);
    //   return (this.countValue = nextValue);
    // });

    const customObservable: Observable<number> = new Observable(
      (observer: Subscriber<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);

          if (count === 13) {
            // observer.error({ message: "I don't like number 13" });
            // observer.complete();
          }
          count++;
        }, 1000);
      },
    );

    this.countSubscription = customObservable
      .pipe(
        filter((value: number) => value % 2 !== 0),
        map((value: number) => value + 1),
      )
      .subscribe({
        next: (value) => {
          this.countValue = value;
          console.log(
            'have got value: ',
            value,
            'was assigned to this.countValue',
          );
        },
        error: (error: Error) => {
          console.log(error.message);
        },
        complete: () => {
          console.log('COMPLETED');
        },
      });
  }

  onStopCount() {
    this.countSubscription.unsubscribe();
  }

  ngOnDestroy() {
    console.log('Destroying home component');
    this.countSubscription.unsubscribe();
  }
}
