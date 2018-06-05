import { IVictimIssues } from '../model/victim-issues.model';

export const victmIssuesTransform = (data: IVictimIssues) => {
  return [
    { text: 'Victims', style: 'sectionHeading', margin: [0, 20, 0, 0] },
    { text: 'Victim impact', style: 'fieldHeading' },
    data.impactOfOffence || '',
    {
      text: [{ text: 'VLO contacted on: ', style: 'fontBold' },
        data.vloContactDate || ''
      ], margin: [0, 10, 0, 0]
    },
    { text: 'Victim Contact Service engagement', style: 'fieldHeading' },
    data.victimContactService || '',
    { text: 'Victim Personal Statement', style: 'fieldHeading' },
    data.victimPersonalStatement || ''
  ];
};
