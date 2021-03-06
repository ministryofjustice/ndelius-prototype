import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';
import { ResetStateAction } from '../../_shared/action/reset-state.action';
import { PdfGeneratorUtil } from '../../_shared/utils/pdf-generator.util';
import { PdfContentUtil } from '../_shared/utils/pdfContent.util';

/**
 * Report complete component
 */
@Component({
  selector: 'app-report-complete',
  templateUrl: './report-complete.component.html'
})
export class ReportCompleteComponent implements OnDestroy {

  private stateSubscriber: Subscription;
  private pdfGenerator: PdfGeneratorUtil;

  /**
   * @constructor
   * @param {Router} router
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private store: Store<IState>) {
    this.pdfGenerator = new PdfGeneratorUtil();
    this.pdfGenerator.reportTitle = 'Short Format Pre-Sentence Report (Draft)';
    this.pdfGenerator.fileName = 'SFPSR';
    this.pdfGenerator.shortName = 'SFPSR1 v0.0.1';

    this.stateSubscriber = store.pipe(select(getCurrentState)).subscribe(data => {
      this.pdfGenerator.reportContent = PdfContentUtil.generateContent(data);
    });
  }

  /**
   *
   */
  generatePdf() {
    this.pdfGenerator.generatePdf();
  }

  /**
   *
   */
  startOver() {
    this.router.navigate(['sfpsr/check-report']);
  }

  /**
   * Dispatch store action to reset the state.
   */
  close() {
    this.store.dispatch(new ResetStateAction());
    this.router.navigate(['/']);
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }
}
