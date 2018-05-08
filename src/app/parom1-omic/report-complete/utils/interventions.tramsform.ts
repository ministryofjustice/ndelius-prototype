import { IInterventions } from '../../interventions/model/interventions.model';

export const interventionsTransform = (data: IInterventions) => {
  return [
    { text: 'Interventions', style: 'sectionHeading' },
    { text: 'List the interventions the prisoner has completed, in chronological order', style: 'fieldHeading' },
    data.interventionsList || '',
    { text: 'Interventions summary', style: 'fieldHeading' },
    data.interventionsSummary || ''
  ];
};
