import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  userName: string | null = ''
  email: string | null = ''
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let userId1 = this.route.snapshot.paramMap.get('id');
    // this.userId = Number(userId1);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = Number(params.get('id'));
    });

   this.route.queryParamMap.subscribe((params: ParamMap) => {
     this.userName = params.get('name');
     this.email = params.get('email');
   })


  }
  gotoPreviousPage(){
    this.userId = this.userId - 1;
     this.router.navigate(['/user-details', this.userId])
  }

  gotoNextPage(){
    this.userId = this.userId + 1;
    this.router.navigate(['/user-details', this.userId])
  }

}
