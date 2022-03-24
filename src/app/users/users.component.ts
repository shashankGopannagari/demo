import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchTerm = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  users = [
    {
    'id': 1,
    'firstName' : 'John',
    'lastName': 'Doe',
    'email': 'john.doe@gmail.com'
  },
  {
    'id': 2,
    'firstName' : 'James',
    'lastName': 'Bond',
    'email': 'james.bond@gmail.com'
  },
  {
    'id': 3,
    'firstName' : 'Jack',
    'lastName': 'Reach',
    'email': 'james.bond@gmail.com'
  },
  {
    'id': 4,
    'firstName' : 'Nelson',
    'lastName': 'Ream',
    'email': 'james.bond@gmail.com'
  },
  {
    'id': 5,
    'firstName' : 'David',
    'lastName': 'Warner',
    'email': 'james.bond@gmail.com'
  }
]

goToUserDetails(user:any){
  this.router.navigate(['/userDetails',user.id])
}
  
}
