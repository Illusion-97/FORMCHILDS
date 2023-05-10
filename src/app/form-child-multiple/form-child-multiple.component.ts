import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-child-multiple',
  templateUrl: './form-child-multiple.component.html',
  styleUrls: ['./form-child-multiple.component.css']
})
export class FormChildMultipleComponent {
  @Input() formGroup! : FormGroup<ChildMultipleFormGroup>;
}

export interface ChildMultipleFormGroup {
  email: AbstractControl,
  password: AbstractControl
}
