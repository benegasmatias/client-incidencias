import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AboutRoutingModule } from './about-routing.module';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
//components
import { NavigationComponent } from '../components/navigation/navigation.component';
import { IncidenciasFormComponent } from '../components/incidencias-form/incidencias-form.component';
import { UserFormComponent } from '../components/users/user-form/user-form.component';
import { ListIncidenciasComponent } from '../components/list-incidencias/list-incidencias.component';
import {PrincipalComponent} from '../components/principal/principal.component';


//pipes
import { FilterPipe } from '../pipes/filter.pipe';
import { FilterInventories } from '../pipes/filterInventories';
import {InventoriesFormComponent} from '../components/inventories-form/inventories-form.component'







@NgModule({
  declarations: [
    NavigationComponent,
    IncidenciasFormComponent,
    UserFormComponent,
    ListIncidenciasComponent,
    PrincipalComponent,
    FilterPipe,
    FilterInventories,
    InventoriesFormComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[PrincipalComponent]
})
export class AboutModule { }
