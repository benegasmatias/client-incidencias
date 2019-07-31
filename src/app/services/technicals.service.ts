import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TechnicalsService {

  API_URI='/gestionincidencias'
  constructor(private http: HttpClient) { }

  getTechnicals(){
    return this.http.get(`${this.API_URI}/technicals/index.json`);
  }
}
