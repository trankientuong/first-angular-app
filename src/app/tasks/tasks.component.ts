import { Component, Input } from '@angular/core';
import { type User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, CommonModule, NewTaskComponent]
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
