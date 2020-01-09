import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListIncidenciasComponent } from '../components/list-incidencias/list-incidencias.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import {IncidenciasFormComponent} from '../components/incidencias-form/incidencias-form.component'
import { InventoriesFormComponent } from '../components/inventories-form/inventories-form.component';
import { ListInventariosComponent } from '../components/list-inventarios/list-inventarios.component';
import { ListTonersComponent } from '../components/list-toners/list-toners.component';
import { ListEntregaTonersComponent } from '../components/list-entrega-toners/list-entrega-toners.component';
import { TonerFormComponent } from '../components/toner-form/toner-form.component';
import{AgendaComponent} from '../components/agenda/agenda.component'
import {authlg} from './authlog'







const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent,
    children: [
      {
        path:'addToners',
        component: TonerFormComponent
     },
      {
         path:'listToners',
         component: ListTonersComponent
      },{
        path:'listSalidasToner',
        component: ListEntregaTonersComponent
      },
      {
        path:'listInventario',
        component: ListInventariosComponent
      },
      { 
        path:'list',
        component:ListIncidenciasComponent
      }, { 
        path:'list/:id',
        component:ListIncidenciasComponent
        
      },{ 
        path:'editinventario/:id/:cabinet/:computer/:ram/:disk/:micro/:placa/:id_cabinet/:ip',
        component: InventoriesFormComponent
      },{
        path:'editinventario/:id/:laptop/:id_laptop/:ram/:disk',
        component:InventoriesFormComponent   
      },{
        path:'editinventario/:id/:monitor/:id_monitor/:serie',
        component:InventoriesFormComponent   
      },{
        path:'editinventarioi/:id/:printer/:id_printer/:toner/:number_printer',
        component:InventoriesFormComponent   
      }
      ,{
        path:'add',
        component: IncidenciasFormComponent
      },{
        path:'addInventario',
        component: InventoriesFormComponent
      },{ 
        path:'list/edit/:id/:proccedings/:technical/:problem/:office/:user/:description',
        component: IncidenciasFormComponent
      }, {
        path:'list/edit/:id/:technical/:problem/:office/:user/:description',
        component: IncidenciasFormComponent
      },
      {
        path:'list/edit/:id/:technical/:problem/:office/:user',
        component: IncidenciasFormComponent
      },
      {
        path:'agenda',
        component: AgendaComponent
      }
    
]
,
    canActivate:[authlg]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap:[PrincipalComponent]
})
export class AboutRoutingModule { }
