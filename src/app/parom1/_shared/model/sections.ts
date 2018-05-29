export interface ISection {
  route: string;
  label: string;
  state: string;
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
      route: '/parom1/prisoner-details',
      label: 'Prisoner details',
      state: 'prisonerDetails'
    },
    {
      route: '/parom1/prisoner-relationship',
      label: 'Prisoner relationship',
      state: 'prisonerRelationship'
    },
    {
      route: '/parom1/previous-risk-assessment',
      label: 'Previous risk assessment',
      state: 'previousRiskAssessment'
    },
    {
      route: '/parom1/victim-issues',
      label: 'Victims',
      state: 'victimIssues'
    },
    {
      route: '/parom1/personality-disorder-pathway',
      label: 'OPD pathway',
      state: 'personalityDisorderPathway'
    },
    {
      dataOnly: true,
      route: '/parom1/signature',
      label: 'Signature and date',
      state: 'signature'
    }
  ];
}
