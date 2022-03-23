import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PipesComponent implements OnInit {
  
  // @Input() parentInfo: string | undefined;
  msgFromParent: any;
  // @Input() title: string | undefined;

  @Output() fromChildToParent = new EventEmitter<any>();

  @Input() 
  set parentInfo(msg: string){
    this.msgFromParent = msg.toUpperCase();
  }
  get parentInfo(){
    return this.msgFromParent;
  }


  sendData(){
    let user = {firstname: 'James',lastName: 'Bond'};
    this.fromChildToParent.emit(user);
  }

  text = "Angular Training";
  searchTerm = '';
  number = 3.56;
  user = {
    'firstName' : 'John',
    'lastName': 'Doe',
    'email': 'johne@example.com',
    'date': new Date()
  }

  users = [
    {
    'firstName' : 'John',
    'lastName': 'Doe',
    'email': 'john.doe@gmail.com'
  },
  {
    'firstName' : 'James',
    'lastName': 'Bond',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'Jack',
    'lastName': 'Reach',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'Nelson',
    'lastName': 'Ream',
    'email': 'james.bond@gmail.com'
  },
  {
    'firstName' : 'David',
    'lastName': 'Warner',
    'email': 'james.bond@gmail.com'
  }
]
  
  constructor() { }

  ngOnInit(): void {
    this.getLowerCase();
  }

  getLowerCase(){
   this.text =  this.text.toLowerCase();
  }

  getClass(){
    if(this.searchTerm){
      return this.users.filter((user) => user.firstName.indexOf(this.searchTerm) > -1) ? 'bg bg-warning' : ''

    }
    return ''
  }





}
