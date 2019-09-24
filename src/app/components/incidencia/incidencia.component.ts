import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Incidencia } from 'src/app/models/incidencia';

import {IncidenciasService} from '../../services/incidencias.service';
import {ListIncidenciasComponent} from '../../components/list-incidencias/list-incidencias.component'



@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {
 @Input() incidencias:Incidencia[];
 list:ListIncidenciasComponent;
 @Output() deleteEmitter: EventEmitter<null> = new EventEmitter();
 @Output() todoEmitter: EventEmitter<null> = new EventEmitter();

  constructor(
    private incidenciasService:IncidenciasService
   ) { }

  ngOnInit(){

 
  }

  setElementsList(bandera:boolean){
    this.todoEmitter.emit()
  }

  deleteIncidencia(i){
 this.incidenciasService.delete(this.incidencias[i].id_support).
 subscribe(
   res=>{
     console.log(res)
     this.deleteEmitter.emit()
    },
     err=>{console.log(err)}
   );
  }

  hola(){
    console.log("tu hermana")
    var search=document.getElementById("myInput").innerText
    console.log(search);
  }
}
