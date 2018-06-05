import { IResettlementPlan } from '../model/resettlement-plan.model';

export const resettlementPlanTransform = (data: IResettlementPlan) => {
  return [
    { text: 'Resettlement plan for release', style: 'sectionHeading' },
    data.resettlementPlanForRelease || '',
  ];
};
