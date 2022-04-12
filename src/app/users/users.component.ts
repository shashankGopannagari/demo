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

  users: any;
  searchTerm = '';
  errMsg: string = '';
  showLoader = false;
  constructor(private router: Router, private userService: UserService) { }


  user = {
    id: 5,
    name: "Dhoni",
    username: "Kamren",
    email: "Dhoi@email.com",
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
      name: "CSK",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  }


  user1 = {
    id: 5,
    name: "Dhoni",
    username: "Kamren",
    email: "Dhoi@email.com",
  }

  ngOnInit(): void {
    this.showLoader = true;
    // this.createUser()
    this.getUsers();
    // this.updateUser();
    this.patchUser();
    this.deleteUser();

  }

  createUser() {

    this.userService.createUser(this.user).subscribe(
      (data: User) => {
        console.table(data);
        this.showLoader = false;
        //  this.users = data
      },
      (error: any) => {
        this.users = [];
        console.log('in error==>', error);
        this.errMsg = error.message;
        this.showLoader = false;
      },
      () => console.log('Done with the users'));
  }


  getUsers() {
    this.userService.users.subscribe(
      (data) => {
        this.users = [];
        this.users = data;
        this.showLoader = false;
      },
      (error: any) => {
        this.users = [];
        console.log('in error==>', error);
        this.errMsg = error;
        this.showLoader = false;
      },
      () => console.log('Done with the users'));
  }


  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (data: User) => {
        console.table(data);
        this.showLoader = false;
        //  this.users = data
      },
      (error: any) => {
        this.users = [];
        console.log('in error==>', error);
        this.errMsg = error.message;
        this.showLoader = false;
      },
      () => console.log('Done with the users'));
  }

  patchUser() {
    this.userService.patchUser(this.user1).subscribe(
      (data: User) => {
        console.table(data);
        this.showLoader = false;
        //  this.users = data
      },
      (error: any) => {
        this.users = [];
        console.log('in error==>', error);
        this.errMsg = error.message;
        this.showLoader = false;
      },
      () => console.log('Done with the users'));
  }

  deleteUser() {
    this.userService.deleteUser(5).subscribe(
      (data: unknown) => {
        console.table(data);
        this.showLoader = false;
        //  this.users = data
      },
      (error: any) => {
        this.users = [];
        console.log('in error==>', error);
        this.errMsg = error.message;
        this.showLoader = false;
      },
      () => console.log('Done with the users'));
  }

  goToUserDetails(user: any) {
    this.router.navigate(['/userDetails', user.id])
  }

}
