import { IPrisonerKnowledge } from '../../prisoner-knowledge/model/prisoner-knowledge.model';

export const prisonerKnowledgeTransform = (data: IPrisonerKnowledge) => {
  return [
    { text: 'COM:Prisoner relationship', style: 'sectionHeading' },
    data.prisonerContact || '',
    { text: data.prisonerFamilyContact || '', margin: [0, 15, 0, 0] },
    { text: data.prisonerStaffContact || '', margin: [0, 15, 0, 0] }
  ];
};
