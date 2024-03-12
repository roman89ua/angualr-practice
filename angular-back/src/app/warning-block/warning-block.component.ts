import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-block',
  templateUrl: './warning-block.component.html',
  styleUrls: [
    './warning-block.component.scss',
    '../success-block/success-block.component.scss',
  ],
})
export class WarningBlockComponent {
  message: string = 'default warning block message';
}
