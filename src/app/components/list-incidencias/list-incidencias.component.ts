import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//component


//service
import {IncidenciasService} from '../../services/incidencias.service';
import {LoginService} from '../../services/login.service';
import {InventarioServiceService} from '../../services/inventario-service.service'

//models

import { Incidencia } from 'src/app/models/incidencia';
import {Inventario} from '../../models/inventario'
import{LoginUser} from '../../models/login-user'














@Component({
  selector: 'app-list-incidencias',
  templateUrl: './list-incidencias.component.html',
  styleUrls: ['./list-incidencias.component.css']
})
export class ListIncidenciasComponent implements OnInit {
inventarios:Inventario[]


inventario=false;


 incidencias:Incidencia[];
 filterPost="";
 incidenciaEdit:Incidencia;


 habilitarEdit=false;
 Nologged=false;

 user:LoginUser=new LoginUser();
 
  constructor(
    private incidenciasService:IncidenciasService,
    private loginService:LoginService,
    private activatedRoute:ActivatedRoute,
    private inventarioService:InventarioServiceService
   ) { }

  ngOnInit() {

  const params = this.activatedRoute.snapshot.params;
  
   if(params.id){
    
    this.inventario=true;
     this.getInventario();
     
     this.habilitarEdit=false;
     this.Nologged=false ;

   }else{ 


    this.getIncidencias();
    this.habilitarEdit=false;
    this.Nologged=false  ;
    }
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

  //------Inventarios

  
  public getInventario(){
    this.inventarioService.getInventario()
    .subscribe(
      data=>
        this.inventarios=data['inventarios']
      ,err=>console.log(err),
      ()=>{}
    )
  }

  //------generador de pdf




  

  

}
