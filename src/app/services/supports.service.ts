import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Supp } from '../models/supp';
import { SalidaToner, Tonerr } from '../models/toner';
import{GabineteOUT}from '../models/gabinete'



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
  addSalida(dep:SalidaToner){
    console.log(dep)
    return this.http.post(`${this.API_URI}/DeparturesToners/add.json`,dep);
  }
  setCantToner(id:string,toner:Tonerr){
    console.log(toner)
    return this.http.patch(`${this.API_URI}/Toners/edit/${id}.json`,toner);
  }

  addGabinete(gab:GabineteOUT){
    return this.http.post(`${this.API_URI}/Cabinets/add.json`,gab);
  }
 
}
