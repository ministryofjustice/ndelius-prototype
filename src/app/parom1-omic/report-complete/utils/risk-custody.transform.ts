import { IRiskCustody } from '../../risk-custody/model/risk-custody.model';

export const riskCustodyTransform = (data: IRiskCustody) => {
  return [
    { text: 'Risk whilst in custody', style: 'sectionHeading' },
    { text: 'Risk of serious harm whilst in custody', style: 'fieldHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: ['*', '*', '*', '*', '*'],
        body: [
          [{ text: 'Public', style: 'fontBold' }, { text: 'Known adult', style: 'fontBold' }, { text: 'Children', style: 'fontBold' },
            { text: 'Prisoners', style: 'fontBold' }, { text: 'Staff', style: 'fontBold' }],
          [data.riskPublic || '', data.riskKnownAdult || '', data.riskChildren || '', data.riskPrisoners || '', data.riskStaff || '']
        ]
      }
    },
    { text: 'Has the prisoner been assessed as posing a risk of harm to themselves whilst in custody?', style: 'fieldHeading' },
    data.riskSelf || '',
    { text: 'Has the prisoner been assessed as posing a risk of harm to others whilst in custody?', style: 'fieldHeading' },
    data.riskOthers || ''
  ];
};
