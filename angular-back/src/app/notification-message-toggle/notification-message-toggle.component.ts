import { Component, Input } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-notification-message-toggle',
  templateUrl: './notification-message-toggle.component.html',
  styleUrl: './notification-message-toggle.component.scss',
})
export class NotificationMessageToggleComponent {
  @Input() name: string = 'Default name of message toggle';

  constructor(private toastService: ToastService) {}

  successHandler() {
    this.toastService.successMessageHandler('success');
  }
  errorHandler() {
    this.toastService.errorMessageHandler('Error');
  }
}
