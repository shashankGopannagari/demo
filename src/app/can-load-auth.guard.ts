import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadAuthGuard implements CanLoad {


  constructor(private router: Router, private userService: UserService){}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
    console.log('in CanActivate Guard');
    const isAdmin = this.userService.isUserAdmin();
    if(isAdmin){
      return isAdmin;
    }

  return this.router.navigate(['/denied'], {skipLocationChange: true})
    
  }
  
  
}
