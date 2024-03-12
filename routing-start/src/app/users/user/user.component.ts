import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  userSubscription: Subscription;
  constructor(private currentRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.currentRoute.snapshot.params['userId'],
      name: this.currentRoute.snapshot.params['userName'],
    };

    this.userSubscription = this.currentRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params['userId'];
        this.user.name = params['userName'];
      },
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
