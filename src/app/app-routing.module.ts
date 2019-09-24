import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeedAuthGuard } from './NeedAuthGuard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
  /*
  {
    path:'',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {path:'incidencia',
component:NavigationComponent,
canActivate:[NeedAuthGuard] 
},
  {
    path:'incidencia/add',
    component:IncidenciasFormComponent,
    canActivate: [NeedAuthGuard] 
  },
  {
    path:'users/add',
    component:UserFormComponent,
    canActivate: [NeedAuthGuard] 
  },{
    path:'incidencia/list',
    component: ListIncidenciasComponent,
    canActivate: [NeedAuthGuard] 
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
