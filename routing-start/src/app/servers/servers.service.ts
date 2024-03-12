export interface IResolveServer {
  id: number;
  status: string;
  name: string;
}

export class ServersService {
  private servers: IResolveServer[] = [
    {
      id: 1,
      name: 'Production server',
      status: 'online',
    },
    {
      id: 2,
      name: 'Test server',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Dev server',
      status: 'offline',
    },
    {
      id: 1000,
      name: 'T-1000',
      status: 'online',
    },
  ];

  getServers(): IResolveServer[] {
    return this.servers;
  }

  getServer(id: number): IResolveServer {
    return this.servers.find((s: IResolveServer) => {
      return s.id === id;
    });
  }

  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server: IResolveServer = this.servers.find((s: IResolveServer) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
