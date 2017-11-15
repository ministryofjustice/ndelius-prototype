export interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
  saved?: boolean;
  valid?: boolean;
}

export function sections(): Array<ISection> {
  return [
    {
      route: '/sfpsr/offender-details',
      label: 'Offender details',
      state: 'offenderDetails'
    },
    {
      route: '/sfpsr/court-details',
      label: 'Sentencing court details',
      state: 'courtDetails'
    },
    {
      route: '/sfpsr/information-sources',
      label: 'Sources of information',
      state: 'informationSources'
    },
    {
      route: '/sfpsr/offence-details',
      label: 'Offence details',
      state: 'offenceDetails'
    },
    {
      route: '/sfpsr/offence-analysis',
      label: 'Offence analysis',
      state: 'offenceAnalysis'
    },
    {
      route: '/sfpsr/offender-assessment',
      label: 'Offender assessment',
      state: 'offenderAssessment'
    },
    {
      route: '/sfpsr/risk-assessment',
      label: 'Risk assessment',
      state: 'riskAssessment'
    },
    {
      route: '/sfpsr/proposed-sentence',
      label: 'Conclusion',
      state: 'proposedSentence'
    }
  ];
}
