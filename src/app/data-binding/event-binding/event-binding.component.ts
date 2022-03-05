import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onFocus(value: string){
    console.log('on Focus', value);
    console.log('==>', document.getElementById('id') as HTMLInputElement);
   
  }

  onBlur(value: string){
    console.log('on Blur', value)
    console.log('==> getElement',(document.getElementById('id') as HTMLInputElement).value);
  }

  click(){
    console.log('click event')
  }

  onMouseOver(){
    console.log('mouse over')
  }

  onMouseOut(){
    console.log('mouse out')
  }

  passData(data: string){
    console.log(data);
  }


}
