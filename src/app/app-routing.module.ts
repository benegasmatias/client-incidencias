import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncidenciasFormComponent} from './components/incidencias-form/incidencias-form.component'
import {TestComponent} from './components/test/test.component'


const routes: Routes = [
  {
    path:'incidencia/add',
    component:IncidenciasFormComponent
  },
  {
    path:'incidencia/test',
    component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
