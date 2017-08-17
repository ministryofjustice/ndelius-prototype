import { ActionReducerMap } from '@ngrx/store';

import { IOffenderDetails } from '../../offender-details/model/offender-details.model';
import { ICourtDetails } from '../../court-details/model/court-details.model';
import { IInformationSources } from '../../information-sources/model/information-sources.model';
import { IOffenceDetails } from '../../offence-details/model/offence-details.model';
import { IOffenceAnalysis } from '../../offence-analysis/model/offence-analysis.model';
import { IOffenderIssues } from '../../offender-issues/model/offender-issues.model';
import { IOffenderAssessmentDetail } from '../../offender-assessment/model/offender-assessment.model';
import { IOffendingPattern } from '../../offending-patterns/model/offending-pattern.model';
import { IRiskAssessment } from '../../risk-assessment/model/risk-assessment.model';
import { ISeriousHarmRisk } from '../../serious-harm-risk/model/serious-harm-risk.model';
import { IProposedSentence } from '../../proposed-sentence/model/proposed-sentence.model';
import { ISignature } from '../../signature/model/signature.model';

import { offenderDetailsReducer } from '../../offender-details/reducer/offender-details.reducer';
import { courtDetailsReducer } from '../../court-details/reducer/court-details.reducer';
import { informationSourcesReducer } from '../../information-sources/reducer/information-sources.reducer';
import { offenceDetailsReducer } from '../../offence-details/reducer/offence-details.reducer';
import { offenceAnalysisReducer } from '../../offence-analysis/reducer/offence-analysis.reducer';
import { offenderIssuesReducer } from '../../offender-issues/reducer/offender-issues.reducer';
import { offenderAssessmentDetailReducer } from '../../offender-assessment/reducer/offender-assessment.reducer';
import { offendingPatternReducer } from '../../offending-patterns/reducer/offending-pattern.reducer';
import { riskAssessmentReducer } from '../../risk-assessment/reducer/risk-assessment.reducer';
import { seriousHarmRiskReducer } from '../../serious-harm-risk/reducer/serious-harm-risk.reducer';
import { proposedSentenceReducer } from '../../proposed-sentence/reducer/proposed-sentence.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

export interface State {
  offenderDetails: IOffenderDetails;
  courtDetails: ICourtDetails;
  informationSources: IInformationSources;
  offenceDetails: IOffenceDetails;
  offenceAnalysis: IOffenceAnalysis;
  offenderIssues: IOffenderIssues;
  offenderAssessmentDetail: IOffenderAssessmentDetail;
  offendingPattern: IOffendingPattern;
  riskAssessment: IRiskAssessment;
  seriousHarmRisk: ISeriousHarmRisk;
  proposedSentence: IProposedSentence;
  signature: ISignature;
}

export const reducers: ActionReducerMap<State> = {
  offenderDetails: offenderDetailsReducer,
  courtDetails: courtDetailsReducer,
  informationSources: informationSourcesReducer,
  offenceDetails: offenceDetailsReducer,
  offenceAnalysis: offenceAnalysisReducer,
  offenderIssues: offenderIssuesReducer,
  offenderAssessmentDetail: offenderAssessmentDetailReducer,
  offendingPattern: offendingPatternReducer,
  riskAssessment: riskAssessmentReducer,
  seriousHarmRisk: seriousHarmRiskReducer,
  proposedSentence: proposedSentenceReducer,
  signature: signatureReducer
};
