import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

 
  API_URI='/gestionincidencias';
  constructor(private http:HttpClient) { }

  

  getIncidencias(){
    
     return this.http.get(`${this.API_URI}/supports/viewtodo.json`);
   
  }

  delete(id){
    return this.http.delete(`${this.API_URI}/Supports/delete/${id}.json`);
  }
  
}
