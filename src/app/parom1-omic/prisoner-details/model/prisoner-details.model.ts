interface IMultiFieldDate {
  day: number;
  month: number;
  year: number;
}

export interface IPrisonerDetails {
  prison: string;
  name: string;
  prisonNumber: string;
  nomisNumber: string;
  gender: number;
  category: string;
  sentence: string;
  sentenceType: string;
  determinateReleaseDate: IMultiFieldDate;
  saved: boolean;
  valid: boolean;
}
