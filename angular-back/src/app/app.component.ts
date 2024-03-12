import { Component } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appComponentHeader: string = 'App component header';

  successButtonTitle: string = 'success message toggle';

  errorButtonTitle: string = 'danger message toggle';

  constructor() {}
}
