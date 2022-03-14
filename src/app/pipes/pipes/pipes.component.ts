import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  
  text = "Angular Training";
  searchTerm = '';
  number = 3.56;
  user = {
    'firstName' : 'John',
    'lastName': 'Doe',
    'email': 'johne@example.com',
    'date': new Date()
  }

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
    'firstName' : 'Jack',
    'lastName': 'Reach',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'Nelson',
    'lastName': 'Ream',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'David',
    'lastName': 'Warner',
    'email': 'james.bond@gmail.com'
  }
]
  
  constructor() { }

  ngOnInit(): void {
    this.getLowerCase();
  }

  getLowerCase(){
   this.text =  this.text.toLowerCase();
  }





}
