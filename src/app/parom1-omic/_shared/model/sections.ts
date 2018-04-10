export interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
  hide?: boolean;
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
      route: '/parom1-omic/risk-reoffending',
      label: 'Risk of re-offending',
      state: 'riskReoffending'
    },
    {
      route: '/parom1-omic/risk-community',
      label: 'Risk within the community',
      state: 'riskCommunity'
    },
    {
      route: '/parom1-omic/risk-custody',
      label: 'Risk whilst in custody',
      state: 'riskCustody'
    },
    {
      route: '/parom1-omic/risk-serious-harm',
      label: 'Risk of serious harm',
      state: 'riskSeriousHarm'
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
      route: '/parom1-omic/sources',
      label: 'Sources',
      state: 'sources'
    },
    {
      hide: true,
      route: '/parom1-omic/pom-prisoner-knowledge',
      label: 'Prisoner knowledge and contact',
      state: 'pomPrisonerKnowledge'
    },
    {
      hide: true,
      route: '/parom1-omic/pom-recommendation',
      label: 'Your recommendation',
      state: 'pomRecommendation'
    }
  ];
}
