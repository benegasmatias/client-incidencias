import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged=false;
  
  constructor(){
    if(localStorage.getItem('accessToken'))
    this.isLogged=true;
  }
}
