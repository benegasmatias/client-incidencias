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

  getUsers()
  {
    return this.http.get(`${this.API_URI}/Users/getUsersForOffices/index.json`);
  }

  showUsersForOffice(id:number){
    return this.http.get(`${this.API_URI}/Users/getUsersForOffices/${id}.json`);
  }
  viewUserForName(name,office){
    return this.http.get(`${this.API_URI}/Users/viewUserForName/${name}/${office}.json`);
  }
}
