import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request infor in intereceptor', request);
    const API_KEY = 'test12347asdfljawenr';
  const AuthReq =   request.clone({
      // headers: new HttpHeaders({
      //   'API_KEY' : API_KEY
      // })
      setHeaders: { API_KEY },
      // headers: {

      // }
      // headers: request.headers.set('API_KEY', API_KEY)
    })

    return next.handle(AuthReq);
  }
}
