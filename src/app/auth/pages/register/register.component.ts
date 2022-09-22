import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    fullname: ['',[Validators.required, Validators.pattern(this.vS.fullnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vS.emailPattern)]],
    username: ['',[Validators.required,this.vS.noUsername]]
  });

  constructor(private fb: FormBuilder, private vS: ValidatorService) {}

  ngOnInit(): void {}

  fieldValid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
