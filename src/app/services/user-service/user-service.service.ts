import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'https://d3vzapi.azurewebsites.net/API/User';
  private url2 = 'http://localhost:3000/user';
  constructor(private httpClient: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':
      'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  }

  lerUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url2, this.httpOptions);
  }

  salvarUser(usuario: User): Observable<User>{
    return this.httpClient.post<User>(this.url, usuario, this.httpOptions);
  }

  updateUser(usuario: User, id: any): Observable<User> {
    return this.httpClient.put<User>(`${this.url}/${id.id}`, usuario, this.httpOptions);
  }
}
