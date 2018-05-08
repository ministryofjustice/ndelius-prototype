import { IPersonalityDisorderPathway } from '../../personality-disorder-pathway/model/personality-disorder-pathway.model';

export const personalityDisorderPathwayTransform = (data: IPersonalityDisorderPathway) => {
  return [
    { text: 'OPD pathway consideration', style: 'fieldHeading' },
    data.opdPathway || ''
  ];
};
