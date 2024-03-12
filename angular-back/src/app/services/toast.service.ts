import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}
  successMessageHandler(message: string) {
    this.toastr.success(message);
  }
  errorMessageHandler(message: string) {
    this.toastr.error(message);
  }
}
