import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';
import { IOption } from '../../_shared/components/checkboxes/checkboxes.component';

import { getInformationSources } from './reducer/information-sources.reducer';

import { IInformationSources } from './model/information-sources.model';
import { UpdateInformationSourcesAction } from './action/information-sources.action';

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
  sections: Array<IOption> = [
    { control: 'interviewInformationSource', label: 'Interview' },
    { control: 'serviceRecordsInformationSource', label: 'Service records' },
    { control: 'cpsSummaryInformationSource', label: 'CPS summary' },
    { control: 'oasysAssessmentsInformationSource', label: 'Previous OASys assessments' },
    { control: 'previousConvictionsInformationSource', label: 'Previous convictions' },
    { control: 'victimStatementInformationSource', label: 'Victim statement' },
    { control: 'childrenServicesInformationSource', label: 'Safeguarding checks' },
    { control: 'policeInformationSource', label: 'Police information' },
    { control: 'guidelinesSource', label: 'Sentencing guidelines' },
    { control: 'domesticAbuseSource', label: 'Domestic abuse call out information' },
    {
      control: 'otherInformationSource', label: 'Other (please specify below)',
      conditional: {
        control: 'otherInformationDetails', label: 'Other source(s) of information'
      }
    }
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
    this.stateSubscriber = store.pipe(select(getInformationSources)).subscribe(data => {
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
    this.router.navigate(['sfpsr/check-report']);
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
      domesticAbuseSource: this.reportData.domesticAbuseSource,
      otherInformationSource: this.reportData.otherInformationSource,
      otherInformationDetails: this.reportData.otherInformationDetails
    });
  }

}
