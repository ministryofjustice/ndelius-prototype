import { IRiskSeriousHarm } from '../../risk-serious-harm/model/risk-serious-harm.model';

export const riskSeriousHarmTransform = (data: IRiskSeriousHarm) => {
  return [
    { text: 'Risk of serious harm', style: 'sectionHeading' },
    { text: 'Detail the nature of the risk of serious harm to the identified groups and explain why', style: 'fieldHeading' },
    data.seriousHarmOthers || '',
    {
      text: 'Analyse the factors that may increase the risk of serious harm to all known groups, now or in the future',
      style: 'fieldHeading'
    },
    data.increaseFactors || '',
    {
      text: 'Analyse the factors that may contribute towards a risk of serious harm reduction to all known groups',
      style: 'fieldHeading'
    },
    data.reductionFactors || '',
  ];
};
