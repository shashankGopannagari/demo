import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {

  constructor(private router: Router){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('in canActivate child');
    let access = false;
  if(access){
    return access;
  }
  return this.router.navigate(['/denied'], {skipLocationChange: true})
  }
  
}
