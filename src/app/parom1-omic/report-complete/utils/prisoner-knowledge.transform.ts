import { IPrisonerKnowledge } from '../../prisoner-knowledge/model/prisoner-knowledge.model';

export const prisonerKnowledgeTransform = (data: IPrisonerKnowledge) => {
  return [
    { text: 'Prisoner knowledge', style: 'sectionHeading' },
    { text: 'How long have you been assigned to the prisoner and what contact have you had with them?', style: 'fieldHeading' },
    data.prisonerContact,
    { text: 'What contact have you had with the prisoner\'s family, partner or significant other?', style: 'fieldHeading' },
    data.prisonerFamilyContact,
    {
      text: 'What contact have you had with other relevant agencies or staff who are involved with the prisoner?',
      style: 'fieldHeading'
    },
    data.prisonerStaffContact
  ];
};
