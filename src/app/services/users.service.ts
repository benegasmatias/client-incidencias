import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Users} from '../models/users'
import {Response} from '../models/response'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  //Aqui problemas con CORS
  API_URI = '/gestionincidencias'

  constructor(private http:HttpClient) { }

  addUser(user:Users):Observable<HttpResponse<Response>>{
    return this.http.post<Response>(`${this.API_URI}/users/add.json`,user,{observe:'response'});
  }
}
