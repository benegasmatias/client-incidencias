import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Office } from '../models/offices'

@Injectable({
  providedIn: 'root'
})
export class OfficesService {

  API_URI = '/gestionincidencias'

  //constructor
  constructor(private http: HttpClient) { }

   getOffices() {
    return this.http.get(`${this.API_URI}/offices/index.json`);
  }


 
}
