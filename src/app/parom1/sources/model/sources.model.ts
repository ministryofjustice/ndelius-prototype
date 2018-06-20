export interface ISources {
  probationCaseRecords: boolean;
  previousConvictions: boolean;
  paroleDossier: boolean;
  cpsDocuments: boolean;
  preSentenceReport: boolean;
  previousParoleReports: boolean;
  judgesComments: boolean;
  other: boolean;
  otherDocuments: string;
  reportsAssessmentsDirections: string;
  sourceLimitations: string;
  sourceLimitationExplanation: string;
  diversity: string;
  saved: boolean;
  valid: boolean;
}

export interface IControls {
  control: string;
  label: string;
}
