import { IReleaseRiskManagement } from '../../release-risk-management/model/release-risk-management.model';

export const releaseRiskManagementTransform = (data: IReleaseRiskManagement) => {
  return [
    { text: 'Release risk management plan', style: 'sectionHeading' },
    { text: 'Agencies', style: 'fieldHeading' },
    data.agencies || '',
    { text: 'Support', style: 'fieldHeading' },
    data.support || '',
    { text: 'Control', style: 'fieldHeading' },
    data.control || '',
    { text: 'Added measures for specific risks', style: 'fieldHeading' },
    data.riskMeasures || '',
    { text: 'Additional conditions or requirement', style: 'fieldHeading' },
    data.requirements || '',
    { text: 'Level of contact', style: 'fieldHeading' },
    data.contactLevel || '',
    { text: 'Contingency plan', style: 'fieldHeading' },
    data.contingencyPlan || '',
  ];
};
