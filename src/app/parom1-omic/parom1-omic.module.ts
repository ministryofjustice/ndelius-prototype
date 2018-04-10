import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { Parom1OmicRouter } from './parom1-omic.router';

import { FeedbackComponent } from './feedback/feedback.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { StartReportComponent } from './start-report/start-report.component';
import { PrisonerDetailsComponent } from './prisoner-details/prisoner-details.component';
import { PrisonerKnowledgeComponent } from './prisoner-knowledge/prisoner-knowledge.component';
import { PreviousRiskAssessmentComponent } from './previous-risk-assessment/previous-risk-assessment.component';
import { VictimIssuesComponent } from './victim-issues/victim-issues.component';
import { PersonalityDisorderPathwayComponent } from './personality-disorder-pathway/personality-disorder-pathway.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { SentencePlanComponent } from './sentence-plan/sentence-plan.component';
import { MappaComponent } from './mappa/mappa.component';
import { RiskReoffendingComponent } from './risk-reoffending/risk-reoffending.component';
import { RiskCommunityComponent } from './risk-community/risk-community.component';
import { RiskCustodyComponent } from './risk-custody/risk-custody.component';
import { RiskSeriousHarmComponent } from './risk-serious-harm/risk-serious-harm.component';
import { ReleaseRiskManagementComponent } from './release-risk-management/release-risk-management.component';
import { ResettlementPlanComponent } from './resettlement-plan/resettlement-plan.component';
import { SupervisionPlanComponent } from './supervision-plan/supervision-plan.component';
import { ComRecommendationComponent } from './com-recommendation/com-recommendation.component';
import { HearingConsiderationsComponent } from './hearing-considerations/hearing-considerations.component';
import { SourcesComponent } from './sources/sources.component';
import { SignatureComponent } from './signature/signature.component';
import { CheckReportComponent } from './check-report/check-report.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { PomPrisonerKnowledgeComponent } from './pom-prisoner-knowledge/pom-prisoner-knowledge.component';
import { PomSignatureComponent } from './pom-signature/pom-signature.component';
import { PomRecommendationComponent } from './pom-recommendation/pom-recommendation.component';

@NgModule({
  imports: [
    CommonModule,
    Parom1OmicRouter,
    SharedModule
  ],
  declarations: [
    FeedbackComponent,
    SaveDraftComponent,
    StartReportComponent,
    PrisonerDetailsComponent,
    PrisonerKnowledgeComponent,
    PreviousRiskAssessmentComponent,
    VictimIssuesComponent,
    PersonalityDisorderPathwayComponent,
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
    ComRecommendationComponent,
    HearingConsiderationsComponent,
    SourcesComponent,
    CheckReportComponent,
    SignatureComponent,
    ReportCompleteComponent,

    PomPrisonerKnowledgeComponent,
    PomRecommendationComponent,
    PomSignatureComponent
  ]
})
export class Parom1OmicModule {
  // Empty
}
