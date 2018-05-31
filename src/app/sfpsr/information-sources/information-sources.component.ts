import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

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
export class InformationSourcesComponent extends BaseComponent {

  /**
   *
   */
  expandContent: boolean;
  /**
   *
   * @type {ISection[]}
   */
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
   *
   */
  private reportData: IInformationSources;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IInformationSources>) {
    super();
    this.stateSubscriber = store.select(getInformationSources).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IInformationSources} value
   */
  saveContent({ value }: { value: IInformationSources }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateInformationSourcesAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/offence-details']);
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

}
