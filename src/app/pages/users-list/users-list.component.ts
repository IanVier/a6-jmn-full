import { Component, inject } from '@angular/core';
import { IApiResponse, IUsers } from '../../interfaces/iusers.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  userService = inject(UserService)
  userData: IUsers[] = []

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
