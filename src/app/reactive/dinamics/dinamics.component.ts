import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css']
})
export class DinamicsComponent {

  myForm: FormGroup = this.fB.group({
    name: [,[Validators.required, Validators.minLength(3)]],
    favorits: this.fB.array([
      ['Metal Gear'], ['Death Stranding']
    ], Validators.required)
  });

  newFavorit: FormControl = this.fB.control('', Validators.required);

  get favoritsArr() {
    return this.myForm.get('favorits') as FormArray;
  }

  constructor(private fB: FormBuilder) { }

  validateField(field: string) {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched;
  }

  addFavorit() {
    if(this.newFavorit.invalid) {return;}

    this.favoritsArr.push( this.fB.control(this.newFavorit.value, Validators.required));
    this.newFavorit.reset();
  }

  deleteFavorit(index: number) {
    this.favoritsArr.removeAt(index);
  }

  saveForm() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;  
    }
  }

}
