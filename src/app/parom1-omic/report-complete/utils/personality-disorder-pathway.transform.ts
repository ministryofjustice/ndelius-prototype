import { IPersonalityDisorderPathway } from '../../personality-disorder-pathway/model/personality-disorder-pathway.model';

export const personalityDisorderPathwayTransform = (data: IPersonalityDisorderPathway) => {
  return [
    { text: 'Offender personality disorder pathway', style: 'sectionHeading' },
    { text: 'Has the prisoner met with the OPD screen to be considered for OPD pathway services?', style: 'fieldHeading' },
    data.opdPathway
  ];
};
