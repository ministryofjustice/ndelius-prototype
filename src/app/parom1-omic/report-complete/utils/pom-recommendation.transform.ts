import { IPomRecommendation } from '../../pom-recommendation/model/pom-recommendation.model';

export const pomRecommendationTransform = (data: IPomRecommendation) => {
  return [
    { text: 'Prison Offender Manager - Your recommendation', style: 'sectionHeading' },
    { text: 'Your recommendation', style: 'fieldHeading' },
    data.yourRecommendation,
  ];
};
