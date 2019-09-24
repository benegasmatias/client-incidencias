
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { ErrorPaginaComponent } from './components/error-pagina/error-pagina.component';
import {NeedAuthGuard} from './NeedAuthGuard';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPaginaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,HttpClientModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
