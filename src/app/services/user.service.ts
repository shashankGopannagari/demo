import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  set users1(firstName: string) {

  }

 isUserAdmin(){
   return true;
 }

  get users() {
    console.log('from service');
    let users = [
      {
        'id': 1,
        'firstName': 'John',
        'lastName': 'Doe',
        'email': 'john.doe@gmail.com'
      },
      {
        'id': 2,
        'firstName': 'James',
        'lastName': 'Bond',
        'email': 'james.bond@gmail.com'
      },
      {
        'id': 3,
        'firstName': 'Jack',
        'lastName': 'Reach',
        'email': 'james.bond@gmail.com'
      },
      {
        'id': 4,
        'firstName': 'Nelson',
        'lastName': 'Ream',
        'email': 'james.bond@gmail.com'
      },
      {
        'id': 5,
        'firstName': 'David',
        'lastName': 'Warner',
        'email': 'james.bond@gmail.com'
      }
    ];

    return users;

  }



}
