import { IPomRecommendation } from '../model/pom-recommendation.model';

export const pomRecommendationTransform = (data: IPomRecommendation) => {
  return [
    { text: 'POM recommendation', style: 'fieldHeading' },
    data.yourRecommendation || ''
  ];
};
