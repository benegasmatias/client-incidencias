import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Supp } from '../models/supp';


@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

 
  API_URI='/gestionincidencias';
  constructor(private http:HttpClient) { }

  view(id){
   return this.http.get(`${this.API_URI}/supports/view/${id}.json`)
  }

  getIncidencias(){
    
     return this.http.get(`${this.API_URI}/supports/viewtodo.json`);
   
  }

  delete(id){
    return this.http.delete(`${this.API_URI}/supports/delete/${id}.json`);
  }

  editIncidencia(id,u:Supp){
    return this.http.patch(`${this.API_URI}/Supports/edit/${id}.json`,u);
  }
  
}
