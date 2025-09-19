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
  pageNumber: number = 1
  totalPages: number = 2


  ngOnInit() {
    this.uploadData(this.pageNumber)
  }

  async uploadData (pageNumber: number) {
    try {
        const response: IApiResponse = await this.userService.getAll(pageNumber)
        this.pageNumber = response.page;
        this.totalPages = response.total_pages
        this.userData = response.results;
        console.log('estoy en uploadData', this.pageNumber);
    }
    catch (error) {
      alert(error)
    }
  }
  gotoPrev() {
    const totalPages = this.totalPages
    let pageNumber = this.pageNumber 
    if(pageNumber === 1) {
      this.pageNumber = pageNumber
      this.uploadData(pageNumber) 
    } else {
      pageNumber  = this.pageNumber -1
      this.uploadData(pageNumber) 
    }

  }

  gotoNext() {
    const totalPages = this.totalPages
    let pageNumber = this.pageNumber 
    if(pageNumber === totalPages) {
      this.pageNumber = pageNumber
      this.uploadData(pageNumber) 
    } else {
      pageNumber  = this.pageNumber + 1
      this.uploadData(pageNumber) 
    }
  }


}
