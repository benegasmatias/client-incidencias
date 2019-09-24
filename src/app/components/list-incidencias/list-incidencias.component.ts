import { Component, OnInit } from '@angular/core';
//component


//service
import {IncidenciasService} from '../../services/incidencias.service';

//models

import { Incidencia } from 'src/app/models/incidencia';





@Component({
  selector: 'app-list-incidencias',
  templateUrl: './list-incidencias.component.html',
  styleUrls: ['./list-incidencias.component.css']
})
export class ListIncidenciasComponent implements OnInit {
 incidencias:Incidencia[];
 filterPost:'';
 
  constructor(private incidenciasService:IncidenciasService,
   ) { }

  ngOnInit() {

    console.log(this.incidencias)
   this.getIncidencias();
   console.log(this.filterPost)
   
  }


  public getIncidencias(){
    this.incidenciasService.getIncidencias().subscribe(
      (data)=>{
        console.log(data)
        this.incidencias=data["incidencias"]
      },er=>console.log(er)
    )
     
   }

  

}
