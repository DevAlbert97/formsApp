import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      fullname: [
        '',
        [Validators.required, Validators.pattern(this.vS.fullnamePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vS.emailPattern)],
        [this.emailValidator],
      ],
      username: ['', [Validators.required, this.vS.noUsername]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', Validators.required],
    },
    {
      validators: [this.vS.sameFields('password', 'confirmPass')],
    }
  );

  get errorMessage(): string {
    const errors = this.myForm.get('email')?.errors;
    return errors?.['required'] 
      ? 'Email es obligatorio' 
      : errors?.['pattern'] 
      ? 'El valor ingresado no tiene formato de correo' 
      : errors?.['emailTomado'] 
      ? 'El email fue tomado'
      : ''
  }

  constructor(
    private fb: FormBuilder,
    private vS: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      fullname: 'Carlos Hurtado',
      email: 'test1@test.com',
      username: 'carlos_hur97',
      password: '123456',
      confirmPass: '123456',
    });
  }

  fieldValid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
