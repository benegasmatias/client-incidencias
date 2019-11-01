import { Component, OnInit} from '@angular/core';


//component


//service
import {IncidenciasService} from '../../services/incidencias.service';

//32132132
import {LoginService} from '../../services/login.service';


//models

import { Incidencia } from 'src/app/models/incidencia';
//212312313213123

import{LoginUser} from '../../models/login-user'














@Component({
  selector: 'app-list-incidencias',
  templateUrl: './list-incidencias.component.html',
  styleUrls: ['./list-incidencias.component.css']
})
export class ListIncidenciasComponent implements OnInit {



 incidencias:Incidencia[];
 filterPost="";
 incidenciaEdit:Incidencia;


 habilitarEdit=false;
 Nologged=false;

 user:LoginUser=new LoginUser();
 
  constructor(
    private incidenciasService:IncidenciasService,
    private loginService:LoginService
   ) { }

  ngOnInit() {

  
    this.getIncidencias();
    this.habilitarEdit=false;
    this.Nologged=false  ;
    this.filterPost=" ";
    
  }


  public getIncidencias(){
    this.incidenciasService.getIncidencias().subscribe(
      (data)=>{
        this.incidencias=data["incidencias"]
      },e=>console.log(e),
      ()=>{}
    )
     
   }

   loginEdit(){
 
    this.loginService.login(this.user).
    subscribe(
      datas=>{
        this.habilitarEdit=true; 
        this.Nologged=false     
      },
      err=>this.Nologged=true,
      ()=>{}
    )
  }



  //------generador de pdf




  

  

}
