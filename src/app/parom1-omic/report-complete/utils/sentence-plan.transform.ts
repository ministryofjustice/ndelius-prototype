import { ISentencePlan } from '../../sentence-plan/model/sentence-plan.model';

export const sentencePlanTransform = (data: ISentencePlan) => {
  return [
    { text: 'Current sentence plan and response', style: 'sectionHeading' },
    { text: 'Detail the prisoner\'s sentence plan objectives and their progress', style: 'fieldHeading' },
    data.sentencePlanObjectives,
  ];
};
