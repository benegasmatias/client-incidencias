import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  API_URI='/gestionincidencias';
  constructor(private http:HttpClient) { }

  getEventos(){
    return this.http.get(`${this.API_URI}/Events/index.json`);
  }

  addEvento(evento){
    evento.start= evento.start.toISOString().slice(0,-8)
    evento.end=evento.end.toISOString().slice(0,-8)
    evento.color=JSON.stringify(evento.color)
    console.log(evento)
    return this.http.post(`${this.API_URI}/Events/add.json`,evento);
  }
  editEvento(evento,id){
    console.log(evento.start.toISOString().slice(0,-8),id,evento)
    evento.start= evento.start.toISOString().slice(0,-8)
    evento.end=evento.end.toISOString().slice(0,-8)
    let event={
      start: evento.start,
      end: evento.end,
      title:evento.title,
      color:JSON.stringify(evento.color)
    }
    return this.http.patch(`${this.API_URI}/Events/edit/${id}.json`,event);
  }
  deleteEvento(id){
    return this.http.delete(`${this.API_URI}/Events/delete/${id}.json`)
  }
}
