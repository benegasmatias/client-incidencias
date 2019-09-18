import { Component, OnInit } from '@angular/core';
//service
import {IncidenciasService} from '../../services/incidencias.service';

//models
import {Supp} from '../../models/supp';




@Component({
  selector: 'app-list-incidencias',
  templateUrl: './list-incidencias.component.html',
  styleUrls: ['./list-incidencias.component.css']
})
export class ListIncidenciasComponent implements OnInit {
 incidencias:Supp[];
 
  constructor(private incidenciasService:IncidenciasService,
   ) { }

  ngOnInit() {
   
  }


  getIncidencias(){
    this.incidenciasService.getIncidencias().subscribe(data=>this.incidencias=data['supports'],err=>console.log(err));
  }

}
