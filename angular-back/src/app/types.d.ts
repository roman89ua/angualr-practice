declare type ServerStatus = 'online' | 'offline';

declare type ServerData = {
  id: number;
  name: string;
  status: ServerStatus;
};
