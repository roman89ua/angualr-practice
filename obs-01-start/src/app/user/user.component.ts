import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ActivatedService } from '../activated.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  activated: boolean = false;
  subscriptionActivation: Subscription;

  constructor(
    private route: ActivatedRoute,
    private activateService: ActivatedService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });

    this.subscriptionActivation = this.activateService.isActivated.subscribe(
      (isActivatedValue) => {
        this.activated = isActivatedValue;
      },
    );
  }

  ngOnDestroy(): void {
    this.subscriptionActivation.unsubscribe();
  }

  onActivateToggle() {
    // this.activateService.isActivated.emit(!this.activated);
    this.activateService.isActivated.next(!this.activated);
  }
}
