import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { authGuard } from './authGuard';
import { authlogin } from './authlogin';



const routes: Routes = [{
path:'',
component:LoginComponent,
canActivate:[authlogin]},
{ 
    path: 'incidencia',
    loadChildren: () => import('../about/about.module').then(m => m.AboutModule),
    canActivate:[authGuard]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
