import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  isUserAdmin() {
    return true;
  }

  get users() : Observable<User[]> {
    console.log('from service');
    return this.http.get<User[]>(`${this.baseURL}users`).pipe(catchError(this.errorHandler));
 }

 getUser(userId: number): Observable<User>{
   return this.http.get<User>(`${this.baseURL}users/${userId}`).pipe(catchError(this.errorHandler));
 }


 createUser(user: User) : Observable<User>{
   return this.http.post<User>(`${this.baseURL}users`, user);
 }

 

 errorHandler(error: HttpErrorResponse)  {
   console.log('error===>', error)
  return throwError(error.message || 'unknown error ')
}



}
