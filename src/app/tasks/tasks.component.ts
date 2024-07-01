import { Component, Input } from '@angular/core';
import { type User } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  } 

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
