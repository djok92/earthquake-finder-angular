import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
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

  get cityControl() {
    return this.addForm.controls.city;
  }

  get magnitudeControl() {
    return this.addForm.controls.magnitude;
  }

  get timeControl() {
    return this.addForm.controls.time;
  }

  constructor(private formBuilder: FormBuilder, private validationService: ValidationService) {
    this.addForm = this.formBuilder.group({
      city: ['', Validators.required],
      magnitude: ['', Validators.compose([Validators.required, Validators.min(0)])],
      time: ['', Validators.required]
    });
  }

  sendFormValues(): void {
    if (this.addForm.valid) {
      this.emitFormValues.emit(this.addForm.value);
    } else {
      this.validationService.validateAllFormFields(this.addForm);
    }
  }

  resetFormValues(): void {
    this.addForm.reset();
  }


  ngOnInit() {
  }

}
