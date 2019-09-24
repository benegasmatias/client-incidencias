import { Component, OnInit } from '@angular/core';

import {LoginService} from '../../services/login.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginService:LoginService,private rute:Router) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logout();

    this.rute.navigateByUrl('')

  }

}
