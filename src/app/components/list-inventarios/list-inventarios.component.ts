import { Component, OnInit } from '@angular/core';

import {InventarioServiceService} from '../../services/inventario-service.service'

import {LoginService} from '../../services/login.service';

//models
import {Inventario} from '../../models/inventario'
import{LoginUser} from '../../models/login-user'


@Component({
  selector: 'app-list-inventarios',
  templateUrl: './list-inventarios.component.html',
  styleUrls: ['./list-inventarios.component.css']
})


export class ListInventariosComponent implements OnInit {


  inventarios:Inventario[]
  Nologged = false
  user= new LoginUser()
  filterPost=''
  habilitarEdit=false;

  constructor(
    private inventarioService:InventarioServiceService,
    private loginService:LoginService) { }

  ngOnInit() {

    this.getInventario();

    this.habilitarEdit=false;
    this.Nologged = false

  }


  loginEdit(){
 
    this.loginService.login(this.user).
    subscribe(
      datas=>{
        this.habilitarEdit=true;
        this.Nologged =false     
      },
      err=>this.Nologged=true,
      ()=>{}
    )
  }



  public getInventario(){
    this.inventarioService.getInventario()
    .subscribe(
      data=>
        this.inventarios=data['inventarios']
      ,err=>console.log(err),
      ()=>{}
    )
  }

}
