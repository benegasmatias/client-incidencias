import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { LoginService} from './services/login.service'
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';



@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private customerService:LoginService , private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];
    if (this.customerService.isLogged()===true) {

      return  true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        [''], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}