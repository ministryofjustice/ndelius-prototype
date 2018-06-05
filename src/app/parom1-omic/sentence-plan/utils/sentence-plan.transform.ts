import { ISentencePlan } from '../model/sentence-plan.model';

export const sentencePlanTransform = (data: ISentencePlan) => {
  return [
    { text: 'Current sentence plan', style: 'sectionHeading' },
    data.sentencePlanObjectives || '',
  ];
};
