import { Component } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  servers: ServerData[] = [
    {
      id: 1,
      name: 'First server',
      status: Math.random() * 10 > 5 ? 'online' : 'offline',
    },
  ];

  isCreateButtonDisabled = false;
  serverCreationMessage: string = '';
  serverName: string = '';

  constructor(private toast: ToastService) {}

  messageUpdateHandler(message: string, timeout: number) {
    this.serverCreationMessage = message;
    setTimeout(() => {
      this.serverCreationMessage = '';
    }, timeout);
  }
  createServerHandler() {
    this.isCreateButtonDisabled = true;
    this.servers.push({
      id: this.servers.at(-1).id + 1,
      name: this.serverName,
      status: Math.random() * 10 > 5 ? 'online' : 'offline',
    });
    this.messageUpdateHandler(
      `Server with name ${this.serverName} was created!`,
      1000,
    );
    setTimeout(() => {
      this.toast.successMessageHandler('server creation');
      this.isCreateButtonDisabled = false;
      this.serverName = '';
    }, 1000);
  }

  // serverNameInputHandler(e: Event) {
  //   this.serverName = (e.target as HTMLInputElement).value;
  // }
}
