import { IComRecommendation } from '../../com-recommendation/model/com-recommendation.model';

export const comRecommendationTransform = (data: IComRecommendation) => {
  return [
    { text: 'Your recommendation', style: 'sectionHeading' },
    { text: 'Your recommendation', style: 'fieldHeading' },
    data.yourRecommendation,
  ];
};
