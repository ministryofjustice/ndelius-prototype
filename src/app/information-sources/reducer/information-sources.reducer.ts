import { IInformationSources } from '../model/information-sources.model';
import * as informationSources from '../action/information-sources.action';

export const initialState: IInformationSources = {
  interviewInformationSource: void 0,
  serviceRecordsInformationSource: void 0,
  cpsSummaryInformationSource: void 0,
  oasysAssessmentsInformationSource: void 0,
  previousConvictionsInformationSource: void 0,
  victimStatementInformationSource: void 0,
  childrenServicesInformationSource: void 0,
  policeInformationSource: void 0,
  smartToolSource: void 0,
  guidelinesSource: void 0,
  otherInformationSource: void 0,
  otherInformationDetails: void 0
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
