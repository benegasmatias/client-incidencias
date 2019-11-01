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
   let tokenAccess= sessionStorage.getItem('accessToken');
   sessionStorage.removeItem("accessToken");
   sessionStorage.removeItem("currentUser");
  return this.http.post(`${this.API_URI}/UsersIncidents/logout`,tokenAccess);
 }

 setUser(user:LoginUser)
 {
      let login_user = JSON.stringify(user);
      sessionStorage.setItem("currentUser", login_user);
 }
 setToken(token){
  sessionStorage.setItem("accessToken",token);
 }
 getToken(){
   return sessionStorage.getItem("accessToken");
 }
 isLogged(){
   
    return (sessionStorage.getItem("accessToken") != null);
   
 }


 //login de edit





}
