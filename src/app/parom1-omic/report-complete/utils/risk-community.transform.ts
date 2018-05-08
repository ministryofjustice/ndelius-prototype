import { IRiskCommunity } from '../../risk-community/model/risk-community.model';

export const riskCommunityTransform = (data: IRiskCommunity) => {
  return [
    { text: 'Risk within the community', style: 'sectionHeading' },
    { text: 'Risk of serious harm within the community', style: 'fieldHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: ['*', '*', '*', '*', '*'],
        body: [
          [{ text: 'Public', style: 'fontBold' }, { text: 'Known adult', style: 'fontBold' }, {
            text: 'Children',
            style: 'fontBold'
          }, { text: 'Prisoners', style: 'fontBold' }, {
            text: 'Staff',
            style: 'fontBold'
          }], [data.riskPublic || '', data.riskKnownAdult || '', data.riskChildren || '', data.riskPrisoners || '', data.riskStaff || '']
        ]
      }
    },
    { text: 'Has the prisoner been assessed as posing a risk of harm to themselves in the community?', style: 'fieldHeading' },
    data.riskSelf || '',
    { text: 'Has the prisoner been assessed as posing a risk of harm to others in the community?', style: 'fieldHeading' },
    data.riskOthers || ''
  ];
};
