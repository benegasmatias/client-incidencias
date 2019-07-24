import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  API_URI='http://localhost/gestionincidencias'
  constructor(private http: HttpClient) { }

    getProblems(){
        return this.http.get(`${this.API_URI}/problems/index.json`);
    }
}