import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  searchTerm = '';
  errMsg: string = '';
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    this.createUser()
  }

  createUser() {
    const user = {
      // id: 5,
      name: "Shashank",
      username: "Kamren",
      email: "shashank@email.com",
      address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
      lat: "-31.8129",
      lng: "62.5342"
      }
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
      }
      }
   this.userService.createUser(user).subscribe(
      (data: User) => {
        console.table(data);
        //  this.users = data
       },
       (error: any) => {
        //  this.users = [];
         console.log('in error==>', error);
         this.errMsg = error;
       },
       () => console.log('Done with the users'));
  }
  
  
  getUsers() {
    this.userService.users.subscribe(
     (data) => {
        this.users = data
      },
      (error: any) => {
        this.users = [];
        console.log('in error==>', error);
        this.errMsg = error;
      },
      () => console.log('Done with the users'));
  }
  

goToUserDetails(user:any){
  this.router.navigate(['/userDetails',user.id])
}
  
}
