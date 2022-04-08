import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number | undefined;
  userName: string | null = ''
  email: string | null = ''
  userDetails: User | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    // let userId1 = this.route.snapshot.paramMap.get('id');
    // this.userId = Number(userId1);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = Number(params.get('id'));
      this.getUser(this.userId);
    });

   this.route.queryParamMap.subscribe((params: ParamMap) => {
     this.userName = params.get('name');
     this.email = params.get('email');
   })


  }
  getUser(userId: number) {
    this.userService.getUser(userId).subscribe((data:User)=> this.userDetails = data);
  }


  // gotoPreviousPage(){
  //   this.userId = this.userId - 1;
  //    this.router.navigate(['/users/user-details', this.userId])
  // }

  // gotoNextPage(){
  //   this.userId = this.userId + 1;
  //   this.router.navigate(['/users/user-details', this.userId])
  // }


 
}
