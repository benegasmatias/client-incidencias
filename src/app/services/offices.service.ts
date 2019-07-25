import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Office} from '../models/offices'

@Injectable({
  providedIn: 'root'
})
export class OfficesService {

  offices:Office[];
  API_URI='http://localhost/gestionincidencias'
  constructor(private http: HttpClient) { }

  private getOfficesFromAPI(){
    return this.http.get(`${this.API_URI}/offices/index.json`);
  }


   getOffices():Office[]{
    this.getOfficesFromAPI()
    .subscribe(
      res=>{
        this.offices=[];
        console.log(res);
          for(var office in res){
            let off=res[office];
            this.offices=off;
          }
          console.log(this.offices);
        }
    )
    return this.offices;
  }
}
