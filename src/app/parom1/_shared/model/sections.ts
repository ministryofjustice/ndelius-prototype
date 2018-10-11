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
      route: '/parom1/prisoner-contact',
      label: 'Prisoner contact',
      state: 'prisonerContact'
    },
    {
      route: '/parom1/previous-risk-assessment',
      label: 'RoSH at point of sentence',
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
      state: 'offenderPersonalityDisorderPathway'
    },
    {
      route: '/parom1/behaviour',
      label: 'Behaviour in prison',
      state: 'behaviour'
    },
    {
      route: '/parom1/interventions',
      label: 'Interventions',
      state: 'interventions'
    },
    {
      route: '/parom1/sentence-plan',
      label: 'Current sentence plan',
      state: 'sentencePlan'
    },
    {
      route: '/parom1/mappa',
      label: 'MAPPA',
      state: 'mappa'
    },
    {
      route: '/parom1/risk-assessment',
      label: 'Current risk assessment scores',
      state: 'riskAssessment'
    },
    {
      route: '/parom1/risk-community',
      label: 'Current RoSH: community',
      state: 'riskCommunity'
    },
    {
      route: '/parom1/risk-custody',
      label: 'Current RoSH: custody',
      state: 'riskCustody'
    },
    {
      route: '/parom1/risk-prisoner',
      label: 'Risk to the prisoner',
      state: 'riskPrisoner'
    },
    {
      route: '/parom1/risk-serious-harm',
      label: 'RoSH analysis',
      state: 'riskSeriousHarm'
    },
    {
      route: '/parom1/risk-management-plan',
      label: 'Risk Management Plan (RMP)',
      state: 'releaseRiskManagement'
    },
    {
      route: '/parom1/resettlement-plan',
      label: 'Resettlement plan for release',
      state: 'resettlementPlan'
    },
    {
      route: '/parom1/supervision-plan',
      label: 'Supervision plan for release',
      state: 'supervisionPlan'
    },
    {
      route: '/parom1/recommendation',
      label: 'Recommendation',
      state: 'recommendation'
    },
    {
      route: '/parom1/hearing-considerations',
      label: 'Oral hearing',
      state: 'hearingConsiderations'
    },
    {
      route: '/parom1/sources',
      label: 'Sources',
      state: 'sources'
    },
    {
      dataOnly: true,
      route: '/parom1/signature',
      label: 'Signature and date',
      state: 'signature'
    }
  ];
}
