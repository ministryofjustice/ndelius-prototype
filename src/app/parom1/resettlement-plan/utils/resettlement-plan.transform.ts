import { IResettlementPlan } from '../model/resettlement-plan.model';

export class ResettlementPlanTransform {

  /**
   *
   * @param {IReleaseRiskManagement} data
   * @returns {Object}
   */
  static process(data: IResettlementPlan): Array<any> {
    return [
      { text: 'Resettlement plan for release', style: 'sectionHeading' },
      data.resettlementPlanRequired === 'No' ? 'A resettlement plan for release is not required.' : data.resettlementPlanForRelease || ''
    ];
  }

}
