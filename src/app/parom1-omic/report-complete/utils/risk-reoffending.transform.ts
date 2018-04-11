import { IRiskReoffending } from '../../risk-reoffending/model/risk-reoffending.model';

export const riskReoffendingTransform = (data: IRiskReoffending) => {
  return [
    { text: 'Risk of re-offending', style: 'sectionHeading' },
    { text: 'Risk of serious recidivism (RSR) score', style: 'fieldHeading' },
    data.rsrScore,
    { text: 'OGRS3 percentage of proven re-offending', style: 'fieldHeading' },
    data.ogrs3Percentage,
    { text: 'OGP probability of proven non-violent type re-offending', style: 'fieldHeading' },
    data.ogpProbability,
    { text: 'OVP probability of proven violent type re-offending', style: 'fieldHeading' },
    data.ovpProbability,
    { text: 'Risk Matrix 2000', style: 'fieldHeading' },
    data.riskMatrix2000,
    { text: 'SARA', style: 'fieldHeading' },
    data.sara,
    { text: 'Analyse the likelihood of further offending', style: 'fieldHeading' },
    data.likelihoodOfReoffending,
  ];
};
