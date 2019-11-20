
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule}from '@angular/forms'

//components
import { AppComponent } from './app.component';
import {NeedAuthGuard} from './NeedAuthGuard';
import { AppRoutingModule } from './app-routing.module';
import { SalidaInventarioFormComponent } from './components/salida-inventario-form/salida-inventario-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SalidaInventarioFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
