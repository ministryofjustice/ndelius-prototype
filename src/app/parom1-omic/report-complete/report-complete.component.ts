import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { PdfGeneratorUtil } from '../../_shared/utils/pdf-generator.util';
import { ResetStateAction } from '../../_shared/action/reset-state.action';

import { PdfContentUtil } from '../_shared/utils/pdfContent.util';
import { getCurrentState, IState } from '../_shared/reducer/state.reducers';

/**
 * Save draft component
 */
@Component({
  selector: 'app-report-complete',
  templateUrl: './report-complete.component.html'
})
export class ReportCompleteComponent implements OnDestroy {

  private pdfGenerator: PdfGeneratorUtil;
  private stateSubscriber: Subscription;

  /**
   * @constructor
   * @param {Router} router
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private store: Store<IState>) {
    this.pdfGenerator = new PdfGeneratorUtil();
    this.pdfGenerator.reportTitle = 'Parole Assessment Report Offender Manager (PAROM 1 OMIC)';
    this.pdfGenerator.fileName = 'PAROM1_OMIC';
    this.pdfGenerator.shortName = 'Parom 1 - OMIC v0.0.1';

    this.stateSubscriber = store.select(getCurrentState).subscribe(data => {
      this.pdfGenerator.reportContent = PdfContentUtil.generateContent(data);
    });
  }

  /**
   *
   */
  generateReport() {
    this.pdfGenerator.generatePdf();
  }

  /**
   *
   */
  startOver() {
    this.router.navigate(['parom1-omic/check-report']);
  }

  /**
   *
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
