import { Component } from '@angular/core';

@Component({
  selector: 'app-success-block',
  templateUrl: './success-block.component.html',
  styleUrl: './success-block.component.scss',
})
export class SuccessBlockComponent {
  successBlock: string = 'success-block works';
}
