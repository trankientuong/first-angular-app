import { Component, Input } from '@angular/core';
import { type User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";

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
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

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
}
