import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userNameValidator } from 'src/app/shared/userNameValidator';
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
      firstName: ['', [Validators.required, Validators.minLength, userNameValidator(/admin/),
      userNameValidator(/password/), userNameValidator(/sdf/)]],
      // firstName: ['', [Validators.required, Validators.minLength, userNameValidator ]],
      lastName: [''],
      email: [''],
      password: [''],
      address: this.fb.group({
        houseNum: [''],
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
        agree: [false]
      })

    })
    this.setFormValues()
    this.setValidatorForEmail();
  }

  get getFirstName() {
    return this.registraionForm.get('firstName');
  }

  get getEmail() {
    return this.registraionForm.get('email');
  }


  signIn() {
    console.table(this.registraionForm?.value);
  }



  setValidatorForEmail() {
    this.registraionForm.get('address.agree')?.valueChanges.subscribe((checkedValue: boolean) => {
      const email = this.registraionForm.get('email');
      if (checkedValue) {
        email?.setValidators(Validators.required);
      }
      else {
        email?.clearValidators();
      }

      email?.updateValueAndValidity();
    })
  }

  setFormValues() {
    // this.registraionForm.setValue({
    //   firstName: 'James',
    //   lastName: 'Bond',
    //   email: 'james@gmail.com',
    //   password: 'sdsdfsdf',
    //   address: {
    //     houseNum: '12-1-10',
    //     street: 'Main street',
    //     city: 'New York',
    //     state: 'Telangana',
    //     zip: 121212,
    //     agree: true
    //   }
    // })

this.registraionForm.patchValue({
  firstName: 'James',
  address: {
        houseNum: '12-1-10',
    //     street: 'Main street',
    //     city: 'New York',
    //     state: 'Telangana',
    //     zip: 121212,
    //     agree: true
      }
})

  }
}
