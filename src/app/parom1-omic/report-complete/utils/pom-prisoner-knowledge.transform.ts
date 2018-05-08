import { IPomPrisonerKnowledge } from '../../pom-prisoner-knowledge/model/pom-prisoner-knowledge.model';

export const pomPrisonerKnowledgeTransform = (data: IPomPrisonerKnowledge) => {
  return [
    { text: 'Prison Offender Manager - Prisoner knowledge and contact', style: 'sectionHeading' },
    { text: 'Has the prisoner been assessed as posing a risk of absconding? (only in closed conditions)', style: 'fieldHeading' },
    data.riskOfAbsconding || '',
    { text: 'Provide details of the absconding risk', style: 'fieldHeading' },
    data.riskOfAbscondingDetails || '',
    { text: 'Is the prisoner being, or likely to be Released on Temporary Licence (ROTL)?', style: 'fieldHeading' },
    data.rotl || '',
    { text: 'Provide further ROTL information', style: 'fieldHeading' },
    data.rotlDetails || '',
    { text: 'How long have you been assigned to the prisoner and what contact have you had with them?', style: 'fieldHeading' },
    data.lengthOfAssignment || '',
    { text: 'Prisoner\'s behaviour in prison', style: 'fieldHeading' },
    data.behaviourInPrison,
    { text: 'Further information', style: 'fieldHeading' },
    data.furtherInformation || ''
  ];
};
