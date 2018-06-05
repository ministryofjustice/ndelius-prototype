import { ISupervisionPlan } from '../model/supervision-plan.model';

export const supervisionPlanTransform = (data: ISupervisionPlan) => {
  return [
    { text: 'Supervision plan for release', style: 'sectionHeading' },
    data.supervisionPlanForRelease || '',
  ];
};
