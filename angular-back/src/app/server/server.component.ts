import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
})
export class ServerComponent {
  @Input() server: ServerData;

  getServerId() {
    return this.server.id;
  }
  getColor() {
    return this.server.status === 'online' ? 'aquamarine' : 'lightcoral';
  }
  getServerName() {
    return this.server.name;
  }
}
