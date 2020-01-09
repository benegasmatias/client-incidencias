import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AboutRoutingModule } from './about-routing.module';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
//components
import { NavigationComponent } from '../components/navigation/navigation.component';
import { IncidenciasFormComponent } from '../components/incidencias-form/incidencias-form.component';
import { UserFormComponent } from '../components/users/user-form/user-form.component';
import { ListIncidenciasComponent } from '../components/list-incidencias/list-incidencias.component';
import {PrincipalComponent} from '../components/principal/principal.component';
import { ListInventariosComponent } from '../components/list-inventarios/list-inventarios.component';
import {ListTonersComponent} from '../components/list-toners/list-toners.component'
import {InventoriesFormComponent} from '../components/inventories-form/inventories-form.component'
import { ListEntregaTonersComponent } from '../components/list-entrega-toners/list-entrega-toners.component';
import{TonerFormComponent} from '../components/toner-form/toner-form.component';
import {AgendaComponent} from '../components/agenda/agenda.component';



//pipes
import { FilterPipe } from '../pipes/filter.pipe';
import { FilterInventories } from '../pipes/filterInventories';
import {FilterToners} from '../pipes/filterToners';
import { FilterSalToner } from '../pipes/filSalidaToner';
import{authlg} from './authlog'












@NgModule({
  declarations: [
    NavigationComponent,
    IncidenciasFormComponent,
    UserFormComponent,
    ListIncidenciasComponent,
    PrincipalComponent,
    FilterPipe,
    FilterInventories,
    InventoriesFormComponent,
    ListInventariosComponent,
    ListTonersComponent,
    FilterToners,
    ListEntregaTonersComponent,
    FilterSalToner,
    TonerFormComponent,
    AgendaComponent,
   
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],providers:[authlg],
  bootstrap:[PrincipalComponent]
})
export class AboutModule { }
