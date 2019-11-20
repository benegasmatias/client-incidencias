import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Tonerstock, Toner } from '../models/toner';
@Injectable({
  providedIn: 'root'
})
export class TonerService {

  API_URI='/gestionincidencias'
  constructor(private http:HttpClient) { }

  getToners(){
    return this.http.get(`${this.API_URI}/Toners/index.json`);
  }
  getTonersSalidas(){
    return this.http.get(`${this.API_URI}/DeparturesToners/index.json`);
  }

  EditToner(id,toner){
    return this.http.patch(`${this.API_URI}/Toners/edit/${id}.json`,toner);
  }

  deleteDeparture(id){
    return this.http.delete(`${this.API_URI}/DeparturesToners/delete/${id}.json`);
  }

  getTypeToners(){
    return this.http.get(`${this.API_URI}/TypesToners/index.json`);
    
  }

  addToner(toner:Toner){
  
    return this.http.post(`${this.API_URI}/Toners/add.json`,toner);
  }
  deleteToner(id){
    return this.http.delete(`${this.API_URI}/Toners/delete/${id}.json`);
  }


}
