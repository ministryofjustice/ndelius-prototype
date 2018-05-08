import { IComRecommendation } from '../../com-recommendation/model/com-recommendation.model';

export const comRecommendationTransform = (data: IComRecommendation) => {
  return [
    { text: 'Recommendation', style: 'sectionHeading' },
    data.yourRecommendation || '',
  ];
};
