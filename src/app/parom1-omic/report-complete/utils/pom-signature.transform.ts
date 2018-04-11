import { IPomSignature } from '../../pom-signature/model/pom-signature.model';

export const pomSignatureTransform = (data: IPomSignature) => {
  return [
    { text: 'Prison Offender Manager - Signature and date', style: 'sectionHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: [150, '*'],
        body: [
          [{ text: 'Name', style: 'fontBold' }, data.reportAuthor],
          [{ text: 'Prison', style: 'fontBold' }, data.prison],
          [{ text: 'Countersignature', style: 'fontBold' }, data.counterSignature],
          [{ text: 'Role', style: 'fontBold' }, data.counterSignatureRole],
          [{ text: 'Start date', style: 'fontBold' }, data.startDate],
          [{ text: 'Completion date', style: 'fontBold' }, data.reportDate]
        ]
      }
    }
  ];
};
