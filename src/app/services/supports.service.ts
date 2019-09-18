import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Supp } from '../models/supp';


@Injectable({
  providedIn: 'root'
})
export class SupportsService {
  API_URI='/gestionincidencias'

  constructor(private http:HttpClient) { }


  addSupport(sup:Supp)
  {
   
    return this.http.post(`${this.API_URI}/Supports/add.json`,sup);
  }
}
