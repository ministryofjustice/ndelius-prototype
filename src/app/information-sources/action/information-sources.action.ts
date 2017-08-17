import { Action } from '@ngrx/store';
import { IInformationSources } from '../model/information-sources.model';

export const UPDATE_INFORMATION_SOURCES = 'UPDATE_INFORMATION_SOURCES';

export class UpdateInformationSourcesAction implements Action {
  readonly type = UPDATE_INFORMATION_SOURCES;

  constructor(public payload: IInformationSources) {
    // Empty
  }
}

export type Actions = | UpdateInformationSourcesAction;
