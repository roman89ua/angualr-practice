import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrl: './task-element.component.css',
})
export class TaskElementComponent implements OnDestroy {
  @Input() task: string;
  @Input() index: number;
  @Output() singleElementDelete = new EventEmitter<number>();

  onDeleteHandler(index: number) {
    this.singleElementDelete.emit(index);
  }
  ngOnDestroy(): void {
    console.log(
      `element: ${this.task} with index: ${this.index} will be destroyed in a sec`,
    );
  }
}
