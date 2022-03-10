import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {


  isLoggedIn: boolean = true;
  isSuccess = true;
  constructor() { }

  ngOnInit(): void {
  }

}
