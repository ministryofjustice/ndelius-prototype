import { ISupervisionPlan } from '../model/supervision-plan.model';

export class SupervisionPlanTransform {

  /**
   *
   * @param {ISupervisionPlan} data
   * @returns {Object}
   */
  static process(data: ISupervisionPlan): Array<any> {
    return [
      { text: 'Supervision plan for release', style: 'sectionHeading' },
      data.supervisionPlanRequired === 'No' ? 'A supervision plan for release is not required.' : data.supervisionPlanForRelease || ''
    ];
  }

}
