import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IOffenderDetails } from '../../offender-details/model/offender-details.model';
import { ICourtDetails } from '../../court-details/model/court-details.model';
import { IInformationSources } from '../../information-sources/model/information-sources.model';
import { IOffenceDetails } from '../../offence-details/model/offence-details.model';
import { IOffenceAnalysis } from '../../offence-analysis/model/offence-analysis.model';
import { IOffenderAssessment } from '../../offender-assessment/model/offender-assessment.model';
import { IRiskAssessment } from '../../risk-assessment/model/risk-assessment.model';
import { IProposedSentence } from '../../proposed-sentence/model/proposed-sentence.model';
import { ISignature } from '../../signature/model/signature.model';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

import { offenderDetailsReducer } from '../../offender-details/reducer/offender-details.reducer';
import { courtDetailsReducer } from '../../court-details/reducer/court-details.reducer';
import { informationSourcesReducer } from '../../information-sources/reducer/information-sources.reducer';
import { offenceDetailsReducer } from '../../offence-details/reducer/offence-details.reducer';
import { offenceAnalysisReducer } from '../../offence-analysis/reducer/offence-analysis.reducer';
import { offenderAssessmentReducer } from '../../offender-assessment/reducer/offender-assessment.reducer';
import { riskAssessmentReducer } from '../../risk-assessment/reducer/risk-assessment.reducer';
import { proposedSentenceReducer } from '../../proposed-sentence/reducer/proposed-sentence.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

/**
 * Main state interface
 */
export interface IState {
  offenderDetails: IOffenderDetails;
  courtDetails: ICourtDetails;
  informationSources: IInformationSources;
  offenceDetails: IOffenceDetails;
  offenceAnalysis: IOffenceAnalysis;
  offenderAssessment: IOffenderAssessment;
  riskAssessment: IRiskAssessment;
  proposedSentence: IProposedSentence;
  signature: ISignature;
}

/**
 * Main state reducers
 * @type {ActionReducerMap<IState>}
 */
export const reducers: ActionReducerMap<IState> = {
  offenderDetails: offenderDetailsReducer,
  courtDetails: courtDetailsReducer,
  informationSources: informationSourcesReducer,
  offenceDetails: offenceDetailsReducer,
  offenceAnalysis: offenceAnalysisReducer,
  offenderAssessment: offenderAssessmentReducer,
  riskAssessment: riskAssessmentReducer,
  proposedSentence: proposedSentenceReducer,
  signature: signatureReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
