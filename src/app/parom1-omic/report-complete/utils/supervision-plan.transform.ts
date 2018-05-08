import { ISupervisionPlan } from '../../supervision-plan/model/supervision-plan.model';

export const supervisionPlanTransform = (data: ISupervisionPlan) => {
  return [
    { text: 'Supervision plan for release', style: 'sectionHeading' },
    { text: 'Supervision plan for release', style: 'fieldHeading' },
    data.supervisionPlanForRelease || '',
  ];
};
