import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  title = 'Data Binding';
  style1 = 'border: 3px solid';

  disabled = false;


  user = {firstName: 'Shashank', lastName: 'G'};

  arr = [1,2,3];



  constructor() { }

  ngOnInit(): void {
  }

test() {
  return 'get a string from method';
}




}
