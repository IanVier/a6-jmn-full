import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/iuser.interface';
import { Dialog } from '@angular/cdk/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';

@Component({
  selector: 'app-user-view',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

  activatedRoute = inject(ActivatedRoute)
  userService = inject(UserService)
  userDetail?: IUser
  userId: string | null = null

  private dialog = inject(Dialog) 

  protected openModal() {
    this.dialog.open(UserDeleteComponent, {
      data: {
        firstName: this.userDetail?.first_name,
        lastName: this.userDetail?.last_name,
        userId: this.userDetail?._id
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['_id'] || null
      if (this.userId) {
        this.loadUser()
    } 
  });
}

  async loadUser() {
    try {
      const response = await this.userService.getById(this.userId!)
      this.userDetail = response
    }
    catch (error) {
      alert(error)
    }
  }

}
