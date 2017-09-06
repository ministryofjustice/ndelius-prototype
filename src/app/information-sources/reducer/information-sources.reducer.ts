import { IInformationSources } from '../model/information-sources.model';
import * as informationSources from '../action/information-sources.action';

export const initialState: IInformationSources = {
  interviewInformationSource: null,
  serviceRecordsInformationSource: null,
  cpsSummaryInformationSource: null,
  oasysAssessmentsInformationSource: null,
  previousConvictionsInformationSource: null,
  victimStatementInformationSource: null,
  childrenServicesInformationSource: null,
  policeInformationSource: null,
  smartToolSource: null,
  guidelinesSource: null,
  otherInformationSource: null,
  otherInformationDetails: null,
  saved: false
};

export function informationSourcesReducer(state = initialState, action: informationSources.Actions): IInformationSources {

  switch (action.type) {
    case informationSources.UPDATE_INFORMATION_SOURCES: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getInformationSources = (state: IInformationSources) => state['informationSources'];
