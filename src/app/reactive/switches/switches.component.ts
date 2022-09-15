import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  myForm: FormGroup = this.fB.group({
    gender: ['M',Validators.required],
    notifications: [true, Validators.required],
    terms: [false,Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(private fB: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({...this.person});

    this.myForm.get(' ')
    this.myForm.valueChanges.subscribe( ({conditions, ...rest}) => {
      this.person = rest;
    });
  }

  savePerson() {
    const formValue = {...this.myForm.value};
    delete formValue.notification;

    this.person = formValue;
  }

}
