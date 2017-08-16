interface IOffenderDetails {
  name: string;
  dateOfBirth: string;
  age: number;
  address: string;
}

interface ICourtDetails {
  court: string;
  localJusticeArea: string;
  hearingDate: Date;
}

export interface IReportData {
  offenderDetails: IOffenderDetails;
  courtDetails: ICourtDetails;
}
