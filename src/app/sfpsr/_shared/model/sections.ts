export interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
  dataOnly?: boolean;
  saved?: boolean;
  valid?: boolean;
}

/**
 * Used for check report and also for meta reducers
 * @returns {Array<ISection>}
 */
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
      label: 'Proposal',
      state: 'proposedSentence'
    },
    {
      route: '/sfpsr/information-sources',
      label: 'Sources of information',
      state: 'informationSources'
    },
    {
      dataOnly: true,
      route: '/sfpsr/signature',
      label: 'Sign and date your report',
      state: 'signature'
    }
  ];
}
