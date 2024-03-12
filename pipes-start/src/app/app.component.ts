import { Component } from '@angular/core';

type TServer = {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  applicationStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('disabled');
    }, 2000);
  });

  filterInputValue: string = '';
  listOrder: 'desc' | 'asc' = 'asc';

  servers: TServer[] = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'medium',
      name: 'Aaaaa',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
  ];

  getStatusClasses(server: TServer) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }

  onAddServer() {
    const newServerData: TServer = {
      instanceType: 'medium',
      name: 'New Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    };
    this.servers.push(newServerData);
  }

  onOrderByNameToggle() {
    this.listOrder = this.listOrder === 'asc' ? 'desc' : 'asc';
  }
}
