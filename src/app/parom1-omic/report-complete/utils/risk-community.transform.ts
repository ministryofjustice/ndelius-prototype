import { IRiskCommunity } from '../../risk-community/model/risk-community.model';

export const riskCommunityTransform = (data: IRiskCommunity) => {
  return [
    { text: 'Risk in the community', style: 'sectionHeading' },
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
    { text: 'Self harming risk', style: 'fieldHeading' },
    data.riskSelf || '',
    { text: 'Risk of harm from others', style: 'fieldHeading' },
    data.riskOthers || ''
  ];
};
