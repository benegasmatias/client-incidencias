import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListIncidenciasComponent } from '../components/list-incidencias/list-incidencias.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { IncidenciasFormComponent } from '../components/incidencias-form/incidencias-form.component';


const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent,
    children: [
      { 
        path:'list',
        component:ListIncidenciasComponent
      },{
        path:'add',
        component: IncidenciasFormComponent
      }
    
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap:[PrincipalComponent]
})
export class AboutRoutingModule { }
