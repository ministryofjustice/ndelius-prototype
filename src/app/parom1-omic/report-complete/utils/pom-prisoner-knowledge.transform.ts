import { IPomPrisonerKnowledge } from '../../pom-prisoner-knowledge/model/pom-prisoner-knowledge.model';

export const pomPrisonerKnowledgeTransform = (data: IPomPrisonerKnowledge) => {
  return [
    { text: 'POM: Prisoner relationship', style: 'sectionHeading' },
    data.lengthOfAssignment || '',
    { text: 'Behaviour in prison', style: 'fieldHeading' },
    data.behaviourInPrison,
    { text: 'Absconding risk', style: 'fieldHeading' },
    data.riskOfAbsconding || '',
    { text: data.riskOfAbscondingDetails || '', margin: [0, 10, 0, 0]},
    { text: 'ROTL', style: 'fieldHeading' },
    data.rotl || '',
    { text: data.rotlDetails || '', margin: [0, 10, 0, 0]},
    { text: 'Further information', style: 'fieldHeading' },
    data.furtherInformation || ''
  ];
};
