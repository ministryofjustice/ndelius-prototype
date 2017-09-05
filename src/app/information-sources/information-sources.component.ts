import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getInformationSources } from './reducer/information-sources.reducer';

import { IInformationSources } from './model/information-sources.model';
import { UpdateInformationSourcesAction } from './action/information-sources.action';

@Component({
  selector: 'app-information-sources',
  templateUrl: './information-sources.component.html'
})
export class InformationSourcesComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IInformationSources;
  reportForm: FormGroup;
  expandContent: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IInformationSources>) {
    this.stateSubscriber = store.select(getInformationSources).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      interviewInformationSource: this.reportData.interviewInformationSource,
      serviceRecordsInformationSource: this.reportData.serviceRecordsInformationSource,
      cpsSummaryInformationSource: this.reportData.cpsSummaryInformationSource,
      oasysAssessmentsInformationSource: this.reportData.oasysAssessmentsInformationSource,
      previousConvictionsInformationSource: this.reportData.previousConvictionsInformationSource,
      victimStatementInformationSource: this.reportData.victimStatementInformationSource,
      childrenServicesInformationSource: this.reportData.childrenServicesInformationSource,
      policeInformationSource: this.reportData.policeInformationSource,
      smartToolSource: this.reportData.smartToolSource,
      guidelinesSource: this.reportData.guidelinesSource,
      otherInformationSource: this.reportData.otherInformationSource,
      otherInformationDetails: this.reportData.otherInformationDetails
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['offence-details']);
  }

  /**
   *
   * @param {IInformationSources} value
   */
  onSubmit({ value }: { value: IInformationSources }) {

    // @TODO: No validation required on this page - should this be set as valid by default before they submit the form?
    const updatedValue = Object.assign(value, { saved: true, valid: true });
    this.store.dispatch(new UpdateInformationSourcesAction(updatedValue));
    this.continueJourney();
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
