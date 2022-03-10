import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  topics = ['HTML', 'CSS', "JavaScript", 'Angular' ];

  users = [
    {
    'firstName' : 'John',
    'lastName': 'Doe',
    'email': 'john.doe@gmail.com'
  },
  {
    'firstName' : 'James',
    'lastName': 'Bond',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'James',
    'lastName': 'Bond',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'James',
    'lastName': 'Bond',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'James',
    'lastName': 'Bond',
    'email': 'james.bond@gmail.com'
  }
]
  
  constructor() { }

  ngOnInit(): void {
  }




}
