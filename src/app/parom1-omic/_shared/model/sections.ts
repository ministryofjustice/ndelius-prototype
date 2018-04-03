export interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
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
      route: '/parom1-omic/prisoner-details',
      label: 'Prisoner details',
      state: 'prisonerDetails'
    },
    {
      route: '/parom1-omic/prisoner-knowledge',
      label: 'Prisoner knowledge',
      state: 'prisonerKnowledge'
    },
    {
      route: '/parom1-omic/previous-risk-assessment',
      label: 'Previous risk assessment',
      state: 'previousRiskAssessment'
    },
    {
      route: '/parom1-omic/victim-issues',
      label: 'Victim issues',
      state: 'victimIssues'
    },
    {
      route: '/parom1-omic/personality-disorder-pathway',
      label: 'Offender personality disorder (OPD) pathway',
      state: 'personalityDisorderPathway'
    },
    {
      route: '/parom1-omic/interventions',
      label: 'Interventions',
      state: 'interventions'
    },
    {
      route: '/parom1-omic/sentence-plan',
      label: 'Current sentence plan and response',
      state: 'sentencePlan'
    },
    {
      route: '/parom1-omic/mappa',
      label: 'Multi Agency Public Protection Arrangements (MAPPA)',
      state: 'mappa'
    },
    {
      route: '/parom1-omic/current-risk-assessment',
      label: 'Current risk assessment',
      state: 'currentRiskAssessment'
    },
    {
      route: '/parom1-omic/release-risk-management',
      label: 'Release risk management plan',
      state: 'releaseRiskManagement'
    },
    {
      route: '/parom1-omic/resettlement-plan',
      label: 'Resettlement plan for release',
      state: 'resettlementPlan'
    },
    {
      route: '/parom1-omic/supervision-plan',
      label: 'Supervision plan for release',
      state: 'supervisionPlan'
    },
    {
      route: '/parom1-omic/com-recommendation',
      label: 'Your recommendation',
      state: 'comRecommendation'
    },
    {
      route: '/parom1-omic/hearing-considerations',
      label: 'Oral hearing considerations',
      state: 'hearingConsiderations'
    },
    {
      route: '/parom1-omic/seources',
      label: 'Sources',
      state: 'sources'
    }
  ];
}
