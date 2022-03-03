import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-ex',
  templateUrl: './property-binding-ex.component.html',
  styleUrls: ['./property-binding-ex.component.css']
})
export class PropertyBindingExComponent implements OnInit {

  paraId = 'para2';
  pataTitle = 'paragraph title';
  bsClass = 'bg-primary text-light'
  colValue = 2;
  isClassApplied = true;
  dynamicClass = 'fontClass';
  styleBinding = "border: 2px dotted";
  normal = 'border: 3px solid'
  // single = 'highlight2'



  constructor() { }

  ngOnInit(): void {
  }

getClass(){
  if(this.isClassApplied){
    return 'highlight'
  }
  else {
    return 'single';
  }
}

}
