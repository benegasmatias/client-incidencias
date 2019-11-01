import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/login-user';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 user:LoginUser={
   id:"",
   username:"",
   password:""
 };

 isloged=false;

  constructor(private loginService:LoginService,protected route:Router) { }

  ngOnInit() {
  }

  login(){
    let u:LoginUser

   this.loginService.login(this.user).
   subscribe(data=>{
     this.loginService.setUser(this.user) 
     u=data['0'] 
     this.loginService.setToken(u.id)
     this.route.navigateByUrl('incidencia')
    
    },
   err=>{console.log(err)
    this.isloged=true },
    ()=>{})
  }

  
  

}
