import { IReleaseRiskManagement } from '../model/release-risk-management.model';

export class ReleaseRiskManagementTransform {

  /**
   *
   * @param {IReleaseRiskManagement} data
   * @returns {Object}
   */
  static process(data: IReleaseRiskManagement): Array<any> {
    if (data.riskManagementPlanRequired === 'No') {
      return [
        { text: 'Release risk management plan', style: 'sectionHeading' },
        'A community Risk Management Plan (RMP) is not required.'
      ]
    }
    return [
      { text: 'Release risk management plan', style: 'sectionHeading' },
      { text: 'Current situation (Agencies)', style: 'fieldHeading' },
      data.agencies || '',
      { text: 'Support', style: 'fieldHeading' },
      data.support || '',
      { text: 'Control', style: 'fieldHeading' },
      data.control || '',
      { text: 'Added measures for specific risks', style: 'fieldHeading' },
      data.riskMeasures || '',
      { text: 'Agency actions', style: 'fieldHeading' },
      data.agencyActions || '',
      { text: 'Additional conditions or requirement', style: 'fieldHeading' },
      data.requirements || '',
      { text: 'Level of contact', style: 'fieldHeading' },
      data.contactLevel || '',
      { text: 'Contingency plan', style: 'fieldHeading' },
      data.contingencyPlan || '',
    ];
  }

}
