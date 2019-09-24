import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
//components
import {LoginComponent} from '../components/login/login.component';
import {HomeRoutingModule} from './home-routing.module';
import { CommonModule } from '@angular/common';

import{authGuard} from './authGuard'
import {authlogin} from './authlogin'




@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    CommonModule
  ],
  bootstrap: [LoginComponent],
  providers:[authGuard,authlogin]
})
export class HomeModule { }
