import { IHearingConsiderations } from '../../hearing-considerations/model/hearing-considerations.model';

export const hearingRecommendationsTransform = (data: IHearingConsiderations) => {
  return [
    { text: 'Oral hearing considerations', style: 'sectionHeading' },
    {
      text: 'Does the prisoner need any additional support or special measures to take part in an oral hearing?',
      style: 'fieldHeading'
    },
    data.oralHearingConsiderations || '',
  ];
};
