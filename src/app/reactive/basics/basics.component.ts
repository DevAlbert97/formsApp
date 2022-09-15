import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {

  myForm: FormGroup = this.fB.group({
    product: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fB: FormBuilder) {}

  validateField(field: string) {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched;
  }

  saveForm () {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
    
    
  }
}
