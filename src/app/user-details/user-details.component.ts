import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: string | null = '';
  constructor() { }

  ngOnInit(): void {
    // this.userId = this.activatedSnapShot.paramMap.get('id');

  }

}
