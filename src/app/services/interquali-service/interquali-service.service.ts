import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interquali } from 'src/app/models/interquali.model';

@Injectable({
  providedIn: 'root'
})
export class interqualiServiceService {

  private url = 'https://d3vzapi.azurewebsites.net/API/InterQuali';
  constructor(private httpClient: HttpClient){}

  lerInterquali(): Observable<Interquali[]>{
    return this.httpClient.get<Interquali[]>(this.url + "/GetAll");
  }
}
