import { IPomSignature } from '../model/pom-signature.model';

export const pomSignatureTransform = (data: IPomSignature) => {
  return [
    { text: 'POM Signature and date', style: 'sectionHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: [150, '*'],
        body: [
          [{ text: 'Name', style: 'fontBold' }, data.reportAuthor || ''],
          [{ text: 'Prison', style: 'fontBold' }, data.prison ? data.prison.substring(data.prison.indexOf(':') + 1)  : ''],
          [{ text: 'Countersignature', style: 'fontBold' }, data.counterSignature || ''],
          [{ text: 'Role', style: 'fontBold' }, data.counterSignatureRole || ''],
          [{ text: 'Completion date', style: 'fontBold' }, data.reportDate || '']
        ]
      }
    }
  ];
};
