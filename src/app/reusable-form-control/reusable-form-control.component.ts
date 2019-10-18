import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reusable-form-control',
  templateUrl: './reusable-form-control.component.html',
})
export class ReusableFormControlComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })
}
