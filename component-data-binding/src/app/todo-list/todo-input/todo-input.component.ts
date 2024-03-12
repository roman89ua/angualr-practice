import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent {
  @Output() taskCreate = new EventEmitter<string>();
  newTaskName: string = '';

  private onClear() {
    this.newTaskName = '';
  }
  onNewTaskAdd() {
    this.taskCreate.emit(this.newTaskName);

    this.onClear();
  }
}
