import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponse, IError, IUser } from '../interfaces/iuser.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endPoint = 'https://peticiones.online/api/users'
  private httpClient = inject(HttpClient)

  getAll(pageNumber: number = 1): Promise<IApiResponse> {
  return lastValueFrom(
    this.httpClient.get<IApiResponse>(`${this.endPoint}?page=${pageNumber}`)
  );
}

  getById(_id: string): Promise<IUser> {
    return lastValueFrom(this.httpClient.get<IUser>(`${this.endPoint}/${_id}`))
  }

  update(_id: string, user: IUser): Promise<IUser> {
    return lastValueFrom(this.httpClient.put<IUser>(`${this.endPoint}/${_id}`, user))
  }

  insert(user: IUser): Promise<IUser> {
    return lastValueFrom(this.httpClient.post<IUser>(this.endPoint, user))
  }

  delete(_id: string): Promise<IUser | IError> {
    return lastValueFrom(this.httpClient.delete<IUser | IError>(`${this.endPoint}/${_id}`))
  }


}
