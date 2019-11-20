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

  getToners(){
    return this.http.get(`${this.API_URI}/Toners/index.json`)
  }

  getPrinters(){
    return this.http.get(`${this.API_URI}/Printers/index.json`);
  }

  getCabinetForOffice(id){
    return this.http.get(`${this.API_URI}/Cabinets/getCabinetsForOffices/${id}.json`)
  }
  getLaptopsForOffices(id){
    return this.http.get(`${this.API_URI}/Laptops/getLaptopsForOffices/${id}.json`)
  }
  getMonitorsForOffices(id){
    return this.http.get(`${this.API_URI}/Monitors/getMonitorForOffices/${id}.json`)
  }

  getPrintersForOffices(id){
    return this.http.get(`${this.API_URI}/Printers/getPrintersForOffices/${id}.json`)
  }

  deleteCabinet(id){
    return this.http.delete(`${this.API_URI}/Cabinets/delete/${id}.json`);
  }
  deletePrinter(id){
    return this.http.delete(`${this.API_URI}/Printers/delete/${id}.json`);
  }
  deleteMonitor(id){
    return this.http.delete(`${this.API_URI}/Monitors/delete/${id}.json`);
  }
  deleteLaptops(id){
    return this.http.delete(`${this.API_URI}/laptops/delete/${id}.json`);
  }
  
  
}
