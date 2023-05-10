import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FORMCHILDS';
  mainForm: FormGroup;
  childForm: FormGroup;
  constructor(private _builder: FormBuilder) {
    this.mainForm = _builder.group({
      username : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    this.childForm = _builder.group({
      email : this.mainForm.get('email'),
      password: this.mainForm.get('password')
    })
  }

  getFormControl(name: string): FormControl {
    return <FormControl<any>>this.mainForm.controls[name];
  }

  handleSubmit() {
    this.mainForm.updateValueAndValidity()
    console.log(
      this.mainForm.valid
        ? this.mainForm.value
        : this.mainForm
    )
  }
}
