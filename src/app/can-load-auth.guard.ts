import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadAuthGuard implements CanLoad {


  constructor(private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
    console.log('in CanActivate Guard');
    let access = true;
  if(access){
    return access;
  }
  return this.router.navigate(['/denied'], {skipLocationChange: true})
    
  }
  
  
}
