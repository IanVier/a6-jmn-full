import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interface';
import { Dialog } from '@angular/cdk/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';

@Component({
  selector: 'app-user-card',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() userDetail?: IUser
  private dialog = inject(Dialog) 

  openModal(){
        this.dialog.open(UserDeleteComponent, {
          data: {
            firstName: this.userDetail?.first_name,
            lastName: this.userDetail?.last_name,
            userId: this.userDetail?._id
          }
        });
  }

}
