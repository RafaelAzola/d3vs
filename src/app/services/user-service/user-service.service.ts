import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Auth } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'https://d3vzapi.azurewebsites.net/API/User';
  constructor(private httpClient: HttpClient){}

  authUser(auth: Auth): Observable<Auth> {
    return this.httpClient.post<Auth>(this.url + "/Auth", auth);
  }

  salvarUser(usuario: User): Observable<User>{
    return this.httpClient.post<User>(this.url, usuario);
  }
}
