import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  addForm: FormGroup;

  @Output() emitFormValues = new EventEmitter();

  // Helper Functions
  get cityControl(): AbstractControl {
    return this.addForm.controls.city;
  }

  get magnitudeControl(): AbstractControl {
    return this.addForm.controls.magnitude;
  }

  get timeControl(): AbstractControl {
    return this.addForm.controls.time;
  }

  constructor(private formBuilder: FormBuilder, private validationService: ValidationService) {
    this.addForm = this.formBuilder.group({
      city: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      magnitude: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(10)])],
      time: ['', Validators.required]
    });
  }

  /**
   * Function that emits form values
   */
  sendFormValues(): void {
    if (this.addForm.valid) {
      this.emitFormValues.emit(this.addForm.value);
    } else {
      this.validationService.validateAllFormFields(this.addForm);
    }
  }

  /**
   * Function that resets form values
   */
  resetFormValues(): void {
    this.addForm.reset();
  }

  ngOnInit() {}
}
