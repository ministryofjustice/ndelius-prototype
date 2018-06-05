import { ISignature } from '../model/signature.model';

export const comSignatureTransform = (data: ISignature) => {
  return [
    { text: 'Signature and date', style: 'sectionHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: [150, '*'],
        body: [
          [{ text: 'Name', style: 'fontBold' }, data.reportAuthor || ''],
          [{ text: 'NPS Division & LDU', style: 'fontBold' }, data.division || ''],
          [{ text: 'Office address', style: 'fontBold' }, data.address || ''],
          [{ text: 'Email address', style: 'fontBold' }, data.email || ''],
          [{ text: 'Telephone number', style: 'fontBold' }, data.phone || ''],
          [{ text: 'Countersignature', style: 'fontBold' }, data.counterSignature || ''],
          [{ text: 'Role', style: 'fontBold' }, data.counterSignatureRole || ''],
          [{ text: 'Start date', style: 'fontBold' }, data.startDate || ''],
          [{ text: 'Completion date', style: 'fontBold' }, data.reportDate || '']
        ]
      }
    }
  ];
};
