import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncidenciasFormComponent} from './components/incidencias-form/incidencias-form.component'


const routes: Routes = [
  {
    path:'incidencia/add',
    component:IncidenciasFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
