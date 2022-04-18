import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registraionForm!: FormGroup;
  // registraionForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   address: new FormGroup({
  //     houseNum: new FormControl(''),
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //     agree: new FormControl('')
  //   })

  // })



  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.registraionForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength]],
      lastName: [''],
      email: [''],
      password: [''],
      address: this.fb.group({
        houseNum: [''],
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
        agree: ['']
      })

    })

  }

  get firstName(){
    return this.registraionForm.get('firstName');
  }

  signIn() {
    console.table(this.registraionForm?.value);
  }




}
