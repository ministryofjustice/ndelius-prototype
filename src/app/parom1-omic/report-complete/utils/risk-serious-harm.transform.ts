import { IRiskSeriousHarm } from '../../risk-serious-harm/model/risk-serious-harm.model';

export const riskSeriousHarmTransform = (data: IRiskSeriousHarm) => {
  return [
    { text: 'Risk of serious harm', style: 'sectionHeading' },
    { text: 'Risk of serious harm details', style: 'fieldHeading' },
    data.seriousHarmOthers || '',
    {
      text: 'Factors likely to increase risk of serious harm',
      style: 'fieldHeading'
    },
    data.increaseFactors || '',
    {
      text: 'Factors likely to decrease risk of serious harm',
      style: 'fieldHeading'
    },
    data.reductionFactors || '',
  ];
};
