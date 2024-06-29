import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {  

  @Input({required: true}) user: any;
  // @Output() select = new EventEmitter<any>();
  select = output();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
