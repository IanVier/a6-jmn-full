import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponse, IUsers } from '../interfaces/iusers.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IUserService {
  private endPoint = 'https://peticiones.online/api/users'
  private httpClient = inject(HttpClient)

  getAll(): Promise<IApiResponse[]> {
    return lastValueFrom(this.httpClient.get<IApiResponse[]>(this.endPoint))
  }


}
