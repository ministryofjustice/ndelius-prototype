import { ISentencePlan } from '../model/sentence-plan.model';

export class SentencePlanTransform {

  /**
   *
   * @param {ISentencePlan} data
   * @returns {Object}
   */
  static process(data: ISentencePlan): Array<any> {
    return [
      { text: 'Current sentence plan', style: 'sectionHeading' },
      data.sentencePlanObjectives || '',
    ];
  }

}
