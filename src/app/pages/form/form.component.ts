import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from './passwordValidator';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  userForm: FormGroup;
  userId: string | null = ""
  private activateRoute = inject(ActivatedRoute)
  private userService = inject(UserService)
  public formTitle: string = ''
  public btnSave: string = ''
  private router = inject(Router)

  typeInputPassword = "password"

  showPassword() {
    this.typeInputPassword = this.typeInputPassword === 'text' ? 'password' : 'text'
  }

  constructor() {

    this.userForm = new FormGroup({
      first_name: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl("",[
        Validators.required
      ]),
      email: new FormControl("",[
        Validators.required
      ]),
      image: new FormControl("",[
        Validators.required
      ]),
      username: new FormControl("",[
        Validators.required
      ]),
      password: new FormControl("",[
        Validators.required,
        passwordValidator
      ]),
      _id: new FormControl('')
      }, [])

  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userId) {
        this.updateUser()
      } else {
        this.newUser()
      }
    }
    this.router.navigate(['/home']);
  }

  async newUser() {
    try {
        const userData: IUser = this.userForm.value;
        const response: IUser = await this.userService.insert(userData)
        this.userForm.patchValue(response)
        console.log('Usuario creado!', response)
    }
    catch (error) {
      alert(error)
    }
  }

  async updateUser() {
    try {
        const userData: IUser = this.userForm.value;
        const response: IUser = await this.userService.update( this.userId!,userData)
        this.userForm.patchValue(response)
        console.log('Usuario actualizado!', response)
    }
    catch (error) {
      alert(error)
    }
  }

ngOnInit() {
  this.activateRoute.params.subscribe(params => {
    this.userId = params['_id'] || null
    if (this.userId) {
      this.formTitle = 'Editar usuario'
      this.btnSave = 'Guardar cambios'
      this.loadUser()

    } else if (!this.userId) {
      this.formTitle = 'Crear nuevo usuario'
      this.btnSave = 'Crear usuario'
    }
  })
}

  async loadUser() {
    try {
        const response: IUser = await this.userService.getById(this.userId!)
        this.userForm.patchValue(response)
    }
    catch (error) {
      alert(error)
    }
  }



  checkControl(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
  }

}
