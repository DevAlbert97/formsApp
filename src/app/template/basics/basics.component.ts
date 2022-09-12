import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  initForm = {
    producto: 'GTX 1060 ti',
    precio: 10,
    existencia: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    // console.log(this.myForm);
    this.myForm.resetForm({
      producto: 'Algo',
      precio: 0,
      existencia: 0
    });
  }

  validName(): boolean {
    return this.myForm?.controls['producto']?.invalid 
      && this.myForm?.controls['producto']?.touched;
  }

  validPrice(): boolean {
    return this.myForm?.controls['precio']?.touched 
        && this.myForm?.controls['precio']?.value < 0;
  }
}