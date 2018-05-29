import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import { ResetStateAction } from '../../_shared/action/reset-state.action';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';

import { prisonerDetailsTranform } from './utils/prisoner-details.transform';
import { prisonerKnowledgeTransform } from './utils/prisoner-knowledge.transform';
import { previousRiskAssessmentTransform } from './utils/previous-risk-assessment.transform';
import { victmIssuesTransform } from './utils/victim-issues.transform';
import { personalityDisorderPathwayTransform } from './utils/personality-disorder-pathway.transform';
import { interventionsTransform } from './utils/interventions.tramsform';
import { sentencePlanTransform } from './utils/sentence-plan.transform';
import { mappaTransform } from './utils/mappa.transform';
import { riskReoffendingTransform } from './utils/risk-reoffending.transform';
import { riskCommunityTransform } from './utils/risk-community.transform';
import { riskCustodyTransform } from './utils/risk-custody.transform';
import { riskSeriousHarmTransform } from './utils/risk-serious-harm.transform';
import { releaseRiskManagementTransform } from './utils/release-risk-management.transform';
import { resettlementPlanTransform } from './utils/resettlement-plan.transform';
import { supervisionPlanTransform } from './utils/supervision-plan.transform';
import { comRecommendationTransform } from './utils/com-recommendation.transform';
import { hearingRecommendationsTransform } from './utils/hearing-considerations.transform';
import { sourcesTransform } from './utils/sources.transform';
import { comSignatureTransform } from './utils/com-signature.transform';
import { pomPrisonerKnowledgeTransform } from './utils/pom-prisoner-knowledge.transform';
import { pomRecommendationTransform } from './utils/pom-recommendation.transform';
import { pomSignatureTransform } from './utils/pom-signature.transform';

/**
 * Save draft component
 */
@Component({
  selector: 'app-report-complete',
  templateUrl: './report-complete.component.html'
})
export class ReportCompleteComponent implements OnDestroy {

  private stateSubscriber: Subscription;
  private reportData: IState;

  /**
   * @constructor
   * @param {Router} router
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private store: Store<IState>) {
    // Empty

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    this.stateSubscriber = store.select(getCurrentState).subscribe(data => {
      this.reportData = data;
    });
  }

  /**
   *
   */
  private transformData() {

    const data = this.reportData;

    return {
      info: {
        title: 'Parole Report Parom 1 (OMIC)',
        author: data.signature.reportAuthor || ''
      },
      pageSize: 'A4',
      pageMargins: [40, 60, 40, 60],
      footer: function (currentPage, pageCount) {
        return {
          columns: [{ text: 'Parom 1 (OMIC)', style: 'fontFooter' }, {
            text: currentPage.toString() + ' of ' + pageCount,
            alignment: 'right',
            style: 'fontFooter'
          }]
        };
      },
      content: [
        { text: 'Parole Report Parom 1 (OMIC)', style: 'reportTitle', alignment: 'center' },
        prisonerDetailsTranform(data.prisonerDetails),
        prisonerKnowledgeTransform(data.prisonerKnowledge),
        previousRiskAssessmentTransform(data.previousRiskAssessment),
        victmIssuesTransform(data.victimIssues),
        personalityDisorderPathwayTransform(data.personalityDisorderPathway),
        /**
         * POM JOURNEY START
         */
        { text: 'Prison offender manager section', style: 'sectionHeading', margin: [0, 20, 0, 0] },
        pomPrisonerKnowledgeTransform(data.pomPrisonerKnowledge),
        pomRecommendationTransform(data.pomRecommendation),
        pomSignatureTransform(data.pomSignature),
        /**
         * POM JOURNEY END
         */
        interventionsTransform(data.interventions),
        sentencePlanTransform(data.sentencePlan),
        mappaTransform(data.mappa),
        riskReoffendingTransform(data.riskReoffending),
        riskCommunityTransform(data.riskCommunity),
        riskCustodyTransform(data.riskCustody),
        riskSeriousHarmTransform(data.riskSeriousHarm),
        releaseRiskManagementTransform(data.releaseRiskManagement),
        resettlementPlanTransform(data.resettlementPlan),
        supervisionPlanTransform(data.supervisionPlan),
        comRecommendationTransform(data.comRecommendation),
        hearingRecommendationsTransform(data.hearingConsiderations),
        sourcesTransform(data.sources),
        comSignatureTransform(data.signature)
      ],
      styles: {
        reportTitle: {
          fontSize: 18,
          bold: true
        },
        sectionHeading: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        fieldHeading: {
          bold: true,
          margin: [0, 10, 0, 5]
        },
        fontBold: {
          bold: true
        },
        fontFooter: {
          fontSize: 10,
          color: 'gray',
          margin: [40, 0]
        },
        tableDefault: {
          margin: [0, 5, 0, 15]
        }
      }
    };
  }

  /**
   *
   */
  generateReport() {
    console['info']('Generate PDF report from:', this.reportData);
    pdfMake.createPdf(this.transformData()).download('PAROM1_OMIC_' + new Date().getTime() + '.pdf');
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
