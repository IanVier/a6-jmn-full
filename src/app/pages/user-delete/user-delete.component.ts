import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interface';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-user-delete',
  imports: [],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css'
})
export class UserDeleteComponent {
  dialogRef = inject(DialogRef)
  userData: { firstName: string, userId: string, lastName: string} = inject(DIALOG_DATA)
  userService = inject(UserService)
  router = inject(Router)

closeModal(): void {
  this.dialogRef.close()
}

async deleteUser() {
  const userId = this.userData.userId
    try {
        const response: any = await this.userService.delete(userId)
        console.log('Usuario eliminado!', response)
        toast.success(`El usuario ${response.first_name} ${response.last_name} ha sido eliminad@.` )
        this.closeModal()
        this.router.navigate(['/home'])
    }
    catch (error) {
      alert(error)
    }
}
}
