import { Component, Input } from '@angular/core';
import { type User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';
import { DUMMY_TASKS } from '../dummy-tasks';

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
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  } 

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
