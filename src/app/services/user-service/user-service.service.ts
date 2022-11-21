import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'http://localhost:3000/user';
  constructor(private httpClient: HttpClient){}

  lerUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }

  salvarUser(usuario: User): Observable<User>{
    return this.httpClient.post<User>(this.url, usuario);
  }

  updateUser(usuario: User, id: any): Observable<User> {
    return this.httpClient.put<User>(`${this.url}/${id.id}`, usuario);
  }

  deletarUser(id: any){
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
