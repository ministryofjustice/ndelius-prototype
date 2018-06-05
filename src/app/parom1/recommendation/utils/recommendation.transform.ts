import { IRecommendation } from '../model/recommendation.model';

export class RecommendationTransform {

  /**
   *
   * @param {IRecommendation} data
   * @returns {Object}
   */
  static process(data: IRecommendation): Array<any> {
    return [
      { text: 'Recommendation', style: 'sectionHeading' },
      data.yourRecommendation || '',
    ];
  }

}
