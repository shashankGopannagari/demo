import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseURL = 'http://localhost:3000/';
  // baseURL = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) { }

  isUserAdmin() {
    return true;
  }

  get users() : Observable<User[]> {
    console.log('from service');
    // const url = '../assets/jsons/users.json';
    return this.http.get<User[]>(`${this.baseURL}users`);
 }



}
