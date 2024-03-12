import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnDestroy {
  @Input() tasksList: string[];
  @Output() onDelete = new EventEmitter<number>();

  ngOnDestroy() {
    console.log('ON DESTROY');
  }
}
