import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<Omit<ServerElement, 'type'>>();
  @Output() blueprintServerCreate = new EventEmitter<
    Omit<ServerElement, 'type'>
  >();

  @ViewChild('serverContent', { static: true }) serverContent: ElementRef;
  @ViewChild('serverName', { static: true }) serverName: ElementRef;
  // newServerName: string = '';
  // newServerContent: string = '';
  private onClearForm() {
    // this.newServerContent = '';
    this.serverName.nativeElement.value = '';
    this.serverContent.nativeElement.value = '';
  }
  onAddServer(serverName: string) {
    this.serverCreated.emit({
      name: serverName,
      // content: this.newServerContent,
      content: this.serverContent.nativeElement.value,
    });
    this.onClearForm();
  }

  onAddBlueprint(serverName: string) {
    this.blueprintServerCreate.emit({
      name: serverName,
      // content: this.newServerContent,
      content: this.serverContent.nativeElement.value,
    });
    this.onClearForm();
  }
}
