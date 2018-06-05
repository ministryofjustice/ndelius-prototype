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
      data.supervisionPlanForRelease || '',
    ];
  }

}
