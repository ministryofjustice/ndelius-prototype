import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { ResetStateAction } from '../../_shared/action/reset-state.action';
import { PdfGeneratorUtil } from '../../_shared/utils/pdf-generator.util';

import { IState } from '../_shared/reducer/state.reducers';
import { PdfContentUtil } from '../_shared/utils/pdfContent.util';
import { getCurrentState } from '../_shared/reducer/state.reducers';

/**
 * Save draft component
 */
@Component({
  selector: 'app-save-draft',
  templateUrl: './save-draft.component.html'
})
export class SaveDraftComponent implements OnDestroy {

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
    this.pdfGenerator.shortName = 'SFPSR1 (Draft) v0.0.1';
    this.pdfGenerator.isDraft = true;

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
