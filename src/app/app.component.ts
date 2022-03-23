import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  options = {exact: true};
  msg = 'Data Passing demo';
 
  parentInfo = 'this is the msg from parent Component';

  passData(event:any){
    console.log('====>child Info', event);
  }

}
