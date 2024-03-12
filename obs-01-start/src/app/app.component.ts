import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedService } from './activated.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activated: boolean = false;
  activatedSubscription: Subscription;
  constructor(private activationService: ActivatedService) {}

  ngOnInit() {
    this.activatedSubscription = this.activationService.isActivated.subscribe(
      (isActivatedValue) => {
        this.activated = isActivatedValue;
      },
    );
  }
  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }
}
