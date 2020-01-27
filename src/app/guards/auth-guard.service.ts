import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router) { 

  }
  
  isAuthenticated() { // checks if token is avaialble on each call which is modified
    return true;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated()) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate  {

  constructor(private _router: Router) { 

  }
  
  userRole() { // decoded token can give roles
    return 'Admin';
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
    // decode token / take the role
    if (this.userRole() === next.data.role) { // user Role -- should be equal with route Role
      return true;
    }

    // navigate to login page
    this._router.navigate(['/404']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
