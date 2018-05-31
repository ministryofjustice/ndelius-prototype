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
      route: '/parom1/risk-reoffending',
      label: 'Risk of re-offending',
      state: 'riskReoffending'
    },
    {
      route: '/parom1/risk-community',
      label: 'Risk within the community',
      state: 'riskCommunity'
    },
    {
      route: '/parom1/risk-custody',
      label: 'Risk whilst in custody',
      state: 'riskCustody'
    },
    {
      route: '/parom1/risk-serious-harm',
      label: 'Risk of serious harm',
      state: 'riskSeriousHarm'
    },
    {
      route: '/parom1/release-risk-management',
      label: 'Risk management plan',
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
      label: 'Your recommendation',
      state: 'recommendation'
    },
    {
      route: '/parom1/hearing-considerations',
      label: 'Oral hearing considerations',
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
