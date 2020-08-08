import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
// This authguardservice implements the canactivate interface, which loads before the toute we want to access will be able to load, so th implementation of this will force to implement the canActivate method
export class AuthGuardService implements CanActivate{
// The canActivate method usually is used to check wether a certain part of the applucation can be activated, depending on the route that is being passed and the state of that routhe which has already been set in the app-routing module, in this case it receives a sync or async object such as the observable and the promise, in this case it was done with a promise that come from the auth service, so through the then method of the promise we can alter some of the behavior depending on the result of that promise, which in this case is a boolean one
  constructor(private authService:AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then(
      (authenticated:boolean) => {
        console.log(route);
        console.log(state);
        if(authenticated){
          return true;
        }else{
          return this.router.navigate(['/']);
        }
      }
    )
  }
}
