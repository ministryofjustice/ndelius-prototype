import { IPreviousRiskAssessment } from '../../previous-risk-assessment/model/previous-risk-assessment.model';
import { pipeMonth } from './utils';

export const previousRiskAssessmentTransform = (data: IPreviousRiskAssessment) => {
  return [
    { text: 'Previous risk assessment', style: 'sectionHeading' },
    { text: 'When was the previous risk assessment done?', style: 'fieldHeading' },
    pipeMonth(data.previousDate.month) + ' ' + data.previousDate.year,
    { text: 'Risk factors from the previous risk assessment', style: 'fieldHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: ['*', '*', '*', '*', '*'],
        body: [
          [{ text: 'Public', style: 'fontBold' }, { text: 'Known adult', style: 'fontBold' }, { text: 'Children', style: 'fontBold' },
            { text: 'Prisoners', style: 'fontBold' }, { text: 'Staff', style: 'fontBold' }],
          [data.riskPublic, data.riskKnownAdult, data.riskChildren,
            data.riskPrisoners, data.riskStaff]
        ]
      }
    },
    { text: 'Prisoner\'s attitude to index offence', style: 'sectionHeading' },
    data.attitude
  ];
};
