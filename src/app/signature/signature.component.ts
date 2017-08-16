import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html'
})
export class SignatureComponent {

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
      reportAuthor: '',
      office: '',
      reportDate: this.datePipe.transform(Date.now(), 'dd/MM/yyyy')
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['report-complete']);
  }

  /**
   *
   * @param {Boolean} valid
   */
  onSubmit(valid: Boolean) {
    this.formError = !valid;

    if (valid) {
      // @TODO: Can this be fixed or is this an inherent issue within the jQuery date picker?
      this.reportForm.get('reportDate').setValue((<HTMLInputElement>document.getElementById('reportDate')).value);
      this.continueJourney();
    }
  }

}
