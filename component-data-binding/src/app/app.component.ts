import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated, // Emulated (default one) , Shadow None
})
export class AppComponent {
  serverElements: ServerElement[] = [
    {
      type: 'server',
      name: 'Test',
      content: 'some content from server',
    },
  ];
  onServerAdded(serverData: Omit<ServerElement, 'type'>) {
    this.serverElements.push({
      ...serverData,
      type: 'server',
    });
  }

  onAddedBluePrint(serverData: Omit<ServerElement, 'type'>) {
    this.serverElements.push({
      ...serverData,
      type: 'blueprint',
    });
  }
}
