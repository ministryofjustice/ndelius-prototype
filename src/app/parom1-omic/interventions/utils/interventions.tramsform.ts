import { IInterventions } from '../model/interventions.model';

export const interventionsTransform = (data: IInterventions) => {
  return [
    { text: 'Interventions', style: 'sectionHeading' },
    { text: 'Interventions completed', style: 'fieldHeading' },
    data.interventionsList || '',
    { text: 'Interventions summary', style: 'fieldHeading' },
    data.interventionsSummary || ''
  ];
};
