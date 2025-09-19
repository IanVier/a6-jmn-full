import { Component, inject } from '@angular/core';
import { IApiResponse, IUser } from '../../interfaces/iuser.interface';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from '../user-card/user-card.component';


@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  userService = inject(UserService)
  userData: IUser[] = []

  ngOnInit() {
    this.uploadData()
  }

  async uploadData () {
    try {
        const response: IApiResponse = await this.userService.getAll()
        this.userData = response.results
    }
    catch (error) {
      alert(error)
    }
  }


}
