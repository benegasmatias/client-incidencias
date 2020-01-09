import { Component, OnInit} from '@angular/core';
//service
import {IncidenciasService} from '../../services/incidencias.service';
import {LoginService} from '../../services/login.service';

//models
import { Incidencia } from 'src/app/models/incidencia';
import{LoginUser} from '../../models/login-user'



@Component({
  selector: 'app-list-incidencias',
  templateUrl: './list-incidencias.component.html',
  styleUrls: ['./list-incidencias.component.css']
})
export class ListIncidenciasComponent implements OnInit {



 incidencias:Incidencia[];

 incidenciaEdit:Incidencia;
//parametros para pasar a la pipe
 desde='';
 hasta='';
 filterPost='';
//habilita edicion
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
    this.Nologged=false;
    
    
  }


  public getIncidencias(){
    this.incidenciasService.getIncidencias().subscribe(
      (data)=>{
        this.incidencias=data["incidencias"]
        console.log(data)
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
