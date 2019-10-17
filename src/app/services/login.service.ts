import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginUser } from '../models/login-user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI='/gestionincidencias';

  constructor(private http:HttpClient) { }

 login(user:LoginUser){

     let u={
       username:user.username,
      password:user.password
      }

    return this.http.post(`${this.API_URI}/UsersIncidents/authlogin`,u);

 }
 logout(){
   let tokenAccess= localStorage.getItem('accessToken');
   localStorage.removeItem("accessToken");
   localStorage.removeItem("currentUser");
  return this.http.post(`${this.API_URI}/UsersIncidents/logout`,tokenAccess);
 }

 setUser(user:LoginUser)
 {
      let login_user = JSON.stringify(user);
      localStorage.setItem("currentUser", login_user);
 }
 setToken(token){
   localStorage.setItem("accessToken",token);
 }
 getToken(){
   return localStorage.getItem("accessToken");
 }
 isLogged(){
    return (localStorage.getItem("accessToken") != null);
   
 }


 //login de edit





}
