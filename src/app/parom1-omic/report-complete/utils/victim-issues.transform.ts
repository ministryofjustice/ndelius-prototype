import { IVictimIssues } from '../../victim-issues/model/victim-issues.model';

export const victmIssuesTransform = (data: IVictimIssues) => {
  return [
    { text: 'Victim issues', style: 'sectionHeading' },
    { text: 'On what date did you contact the VLO?', style: 'fieldHeading' },
    data.vloContactDate,
    { text: 'Are the victims engaged in the Victim Contact Service?', style: 'fieldHeading' },
    data.victimContactService,
    { text: 'Does the victim wish to submit a Victim Personal Statement?', style: 'fieldHeading' },
    data.victimPersonalStatement,
    { text: 'Analyse the impact of the offence on the victim', style: 'fieldHeading' },
    data.impactOfOffence
  ];
};
