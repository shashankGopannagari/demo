import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  searchTerm = '';
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users.subscribe((data) => this.users = data);
  }
  

goToUserDetails(user:any){
  this.router.navigate(['/userDetails',user.id])
}
  
}
