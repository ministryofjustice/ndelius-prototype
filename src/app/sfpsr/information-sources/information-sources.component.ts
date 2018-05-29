import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { getInformationSources } from './reducer/information-sources.reducer';

import { IInformationSources } from './model/information-sources.model';
import { UpdateInformationSourcesAction } from './action/information-sources.action';

interface ISection {
  control: string;
  label: string;
}

@Component({
  selector: 'app-information-sources',
  templateUrl: './information-sources.component.html'
})
export class InformationSourcesComponent implements AfterViewInit, OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IInformationSources;
  reportForm: FormGroup;
  expandContent: boolean;

  sections: Array<ISection> = [
    { control: 'interviewInformationSource', label: 'Interview' },
    { control: 'serviceRecordsInformationSource', label: 'Service records' },
    { control: 'cpsSummaryInformationSource', label: 'CPS summary' },
    { control: 'oasysAssessmentsInformationSource', label: 'Previous OASys assessments' },
    { control: 'previousConvictionsInformationSource', label: 'Previous convictions' },
    { control: 'victimStatementInformationSource', label: 'Victim statement' },
    { control: 'childrenServicesInformationSource', label: 'Children services checks' },
    { control: 'policeInformationSource', label: 'Police information' },
    { control: 'guidelinesSource', label: 'Sentencing guidelines' },
    { control: 'otherInformationSource', label: 'Other (please specify below)' }
  ];

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
      guidelinesSource: this.reportData.guidelinesSource,
      otherInformationSource: this.reportData.otherInformationSource,
      otherInformationDetails: this.reportData.otherInformationDetails
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['sfpsr/offence-details']);
  }

  /**
   *
   */
  private saveContent({ value }: { value: IInformationSources }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateInformationSourcesAction(updatedValue));
  }

  /**
   *
   * @param {IInformationSources} value
   */
  onSubmit({ value }: { value: IInformationSources }) {

    this.saveContent({ value: value });
    this.continueJourney();
  }

  /**
   *
   */
  ngAfterViewInit() {
    if (this.stateSubscriber) {
      this.stateSubscriber.unsubscribe();
    }
    this.saveContent({ value: this.reportData });
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
