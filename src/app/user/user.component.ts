import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {  

  // @Input({required: true}) user: any;
  user: any = input.required();
  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  // get imagePath() {
  //   return 'assets/users/' + this.user().avatar;
  // }

  onSelectUser() {
  }
}
