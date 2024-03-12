import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  allTasks: string[] = [];

  addTaskHandler(newTaskTitle: string) {
    this.allTasks.push(newTaskTitle);
  }

  taskDeleteHandler(index: number) {
    this.allTasks.splice(index, 1);
  }
}
