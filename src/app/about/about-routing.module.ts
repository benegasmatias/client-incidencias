import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListIncidenciasComponent } from '../components/list-incidencias/list-incidencias.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import {IncidenciasFormComponent} from '../components/incidencias-form/incidencias-form.component'
import { InventoriesFormComponent } from '../components/inventories-form/inventories-form.component';






const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent,
    children: [
      { 
        path:'list',
        component:ListIncidenciasComponent
      }, { 
        path:'list/:id',
        component:ListIncidenciasComponent
        
      },{ 
        path:'list/1/editinventario/:id/:cabinet/:computer/:ram/:disk/:micro/:placa/:id_cabinet/:ip',
        component: InventoriesFormComponent
      },{
        path:'list/1/editinventario/:id/:laptop/:id_laptop/:ram/:disk',
        component:InventoriesFormComponent   
      },{
        path:'list/1/editinventario/:id/:monitor/:id_monitor/:serie',
        component:InventoriesFormComponent   
      },{
        path:'list/1/editinventarioi/:id/:printer/:id_printer/:toner/:number_printer',
        component:InventoriesFormComponent   
      }
      ,{
        path:'add',
        component: IncidenciasFormComponent
      },{
        path:'addInventario',
        component: InventoriesFormComponent
      },{ 
        path:'edit/:id/:proccedings/:technical/:problem/:office/:user/:description',
        component: IncidenciasFormComponent
      }, {
        path:'edit/:id/:technical/:problem/:office/:user/:description',
        component: IncidenciasFormComponent
      },
      {
        path:'edit/:id/:technical/:problem/:office/:user',
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
