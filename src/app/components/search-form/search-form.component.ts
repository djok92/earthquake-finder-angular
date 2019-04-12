import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;

  @Output() emitFormValues = new EventEmitter();

  // Helper Functions

  get cityControl() {
    return this.searchForm.controls.city;
  }

  get radiusControl() {
    return this.searchForm.controls.radius;
  }

  get startDateControl() {
    return this.searchForm.controls.startDate;
  }

  get endDateControl() {
    return this.searchForm.controls.endDate;
  }

  get searchTypeControl() {
    return this.searchForm.controls.searchType;
  }

  constructor(private formBuilder: FormBuilder, private validationService: ValidationService) {
    this.searchForm = this.formBuilder.group({
      city: ['', Validators.required],
      radius: ['', Validators.compose([Validators.required, Validators.min(0)])],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      searchType: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  sendFormValues(): void {
    if (this.searchForm.valid) {
      this.emitFormValues.emit(this.searchForm.value);
    } else {
      this.validationService.validateAllFormFields(this.searchForm);
    }
  }

  resetFormValues(): void {
    this.searchForm.reset();
  }

}
