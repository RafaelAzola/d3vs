import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interquali } from 'src/app/models/interquali.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'http://localhost:3000/interquali';
  constructor(private httpClient: HttpClient){}

  lerInterquali(): Observable<Interquali[]>{
    return this.httpClient.get<Interquali[]>(this.url);
  }

  salvarInterquali(interquali: Interquali): Observable<Interquali>{
    return this.httpClient.post<Interquali>(this.url, interquali);
  }

  updateInterquali(interquali: Interquali, id: any): Observable<Interquali> {
    return this.httpClient.put<Interquali>(`${this.url}/${id.id}`, interquali);
  }

  deletarInterquali(id: any){
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
