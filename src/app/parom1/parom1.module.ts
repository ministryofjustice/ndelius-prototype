import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { Parom1Router } from './parom1.router';

import { SaveDraftComponent } from './save-draft/save-draft.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StartReportComponent } from './start-report/start-report.component';
import { PrisonerDetailsComponent } from './prisoner-details/prisoner-details.component';
import { PrisonerRelationshipComponent } from './prisoner-relationship/prisoner-relationship.component';
import { PreviousRiskAssessmentComponent } from './previous-risk-assessment/previous-risk-assessment.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { VictimIssuesComponent } from './victim-issues/victim-issues.component';
import { OpdPathwayComponent } from './opd-pathway/opd-pathway.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { SentencePlanComponent } from './sentence-plan/sentence-plan.component';
import { RiskReoffendingComponent } from './risk-reoffending/risk-reoffending.component';
import { MappaComponent } from './mappa/mappa.component';
import { RiskCommunityComponent } from './risk-community/risk-community.component';
import { RiskCustodyComponent } from './risk-custody/risk-custody.component';
import { RiskSeriousHarmComponent } from './risk-serious-harm/risk-serious-harm.component';
import { ReleaseRiskManagementComponent } from './release-risk-management/release-risk-management.component';
import { ResettlementPlanComponent } from './resettlement-plan/resettlement-plan.component';
import { SupervisionPlanComponent } from './supervision-plan/supervision-plan.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { HearingConsiderationsComponent } from './hearing-considerations/hearing-considerations.component';
import { SourcesComponent } from './sources/sources.component';
import { CheckReportComponent } from './check-report/check-report.component';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  imports: [
    CommonModule,
    Parom1Router,
    SharedModule
  ],
  declarations: [
    SaveDraftComponent,
    FeedbackComponent,
    StartReportComponent,
    PrisonerDetailsComponent,
    PrisonerRelationshipComponent,
    PreviousRiskAssessmentComponent,
    VictimIssuesComponent,
    OpdPathwayComponent,
    BehaviourComponent,
    InterventionsComponent,
    SentencePlanComponent,
    MappaComponent,
    RiskReoffendingComponent,
    RiskCommunityComponent,
    RiskCustodyComponent,
    RiskSeriousHarmComponent,
    ReleaseRiskManagementComponent,
    ResettlementPlanComponent,
    SupervisionPlanComponent,
    RecommendationComponent,
    HearingConsiderationsComponent,
    SourcesComponent,
    CheckReportComponent,
    SignatureComponent,
    ReportCompleteComponent
  ]
})
export class Parom1Module {
  // Empty
}
