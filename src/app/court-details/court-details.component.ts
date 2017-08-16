import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-court-details',
  templateUrl: './court-details.component.html'
})
export class CourtDetailsComponent {

  reportForm: FormGroup;
  formError: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this.createForm();
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      court: 'Manchester and Salford Magistrates Court',
      localJusticeArea: 'Greater Manchester',
      dateOfHearing: this.datePipe.transform(Date.now(), 'dd/MM/yyyy')
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['information-sources']);
  }

  /**
   *
   * @param {Boolean} valid
   */
  onSubmit(valid: Boolean) {
    this.formError = !valid;
    if (valid) {
      // @TODO: Can this be fixed or is this an inherent issue within the jQuery date picker?
      this.reportForm.get('dateOfHearing').setValue((<HTMLInputElement>document.getElementById('dateOfHearing')).value);
      this.continueJourney();
    }
  }

}
