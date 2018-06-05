import { IHearingConsiderations } from '../model/hearing-considerations.model';

export const hearingRecommendationsTransform = (data: IHearingConsiderations) => {
  return [
    { text: 'Oral hearing considerations', style: 'sectionHeading' },
    data.oralHearingConsiderations || '',
  ];
};
