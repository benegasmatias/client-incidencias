import { Component, OnInit } from '@angular/core';
import {TonerService} from '../../services/toner.service';
import { TonerEntrega } from 'src/app/models/toner';
import {LoginService} from '../../services/login.service'
import{LoginUser} from '../../models/login-user';
import { Router } from '@angular/router';

import {Office} from '../../models/offices';
import {OfficesService} from '../../services/offices.service'




@Component({
  selector: 'app-list-entrega-toners',
  templateUrl: './list-entrega-toners.component.html',
  styleUrls: ['./list-entrega-toners.component.css']
})
export class ListEntregaTonersComponent implements OnInit {

  
  TonerEntrega:TonerEntrega[]

  office:Office[]
  toner= new TonerEntrega()
 

  filterTonerEntrega=' ';
  user= new LoginUser();
  Nologged=false;
  habilitarEdit=false;

  constructor(private tonerStockService:TonerService,
    private loginService:LoginService,
    private officeService:OfficesService) { }

  ngOnInit() {
    this.getTonerSalida();
    this.Nologged=false;
  }

  eliminarSalida(id){
    this.tonerStockService.deleteDeparture(id).
subscribe(
  ()=>{
    this.getTonerSalida()
  },
  ()=>{},
  ()=>{},
)
  }


  getTonerSalida(){
    this.tonerStockService.getTonersSalidas().
    subscribe(
      (data)=>{this.TonerEntrega=data['departures']
    console.log(data)}, 
      ()=>{},
      ()=>{})
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
  getOffice(){
    this.officeService.getOffices().subscribe(
      (data)=>this.office=data['offices'],
      ()=>{},
      ()=>{}
    )
  }


}
