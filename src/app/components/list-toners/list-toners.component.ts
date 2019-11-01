import { Component, OnInit } from '@angular/core';
import {TonerService} from '../../services/toner.service';
import { Tonerstock } from 'src/app/models/toner';
import {LoginService} from '../../services/login.service'
import{LoginUser} from '../../models/login-user';
import { Router } from '@angular/router';
import { typesToners } from 'src/app/models/types_toners';


@Component({
  selector: 'app-list-toners',
  templateUrl: './list-toners.component.html',
  styleUrls: ['./list-toners.component.css']
})
export class ListTonersComponent implements OnInit {

  TonerStock:Tonerstock[]
  typesToner: typesToners[]
  
  toner:Tonerstock =new Tonerstock();

  filterTonerStock=' ';
  user= new LoginUser();
  Nologged=false;
  habilitarEdit=false;

  constructor(private tonerStockService:TonerService,
    private loginService:LoginService,
    private router:Router) { }

  ngOnInit() {
    this.getTonerStock();
      this.Nologged=false;
      this.getTypeToner()
  }
getTypeToner(){
  this.tonerStockService.getTypeToners().subscribe(
    (data)=>this.typesToner=data['typesToner']
  )
}

  agregaToner(toner){
   
    this.toner=toner
  }

  AumentarStock(){
    this.tonerStockService.EditToner(this.toner.id_toner,this.toner).
    subscribe(
      ()=>{

        
        this.router.navigateByUrl("incidencia/listToners");
      },
      ()=>{},
      ()=>{}
    )
    }

  getTonerStock(){
    this.tonerStockService.getToners().
    subscribe(
      (data)=>{this.TonerStock=data['toners']
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

}
