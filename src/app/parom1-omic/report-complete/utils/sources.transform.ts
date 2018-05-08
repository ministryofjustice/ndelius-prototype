import { ISources } from '../../sources/model/sources.model';
import { yesNo } from './utils';

export const sourcesTransform = (data: ISources) => {
  return [
    { text: 'Sources', style: 'sectionHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: ['*', 50, '*', 50],
        body: [
          [{
            text: 'Previous convictions',
            style: 'fontBold'
          }, yesNo(data.previousConvictions), {
            text: 'Previous parole reports',
            style: 'fontBold'
          }, yesNo(data.previousParoleReports)],
          [{ text: 'CPS documents', style: 'fontBold' }, yesNo(data.cpsDocuments), {
            text: 'Parole dossier',
            style: 'fontBold'
          }, yesNo(data.paroleDossier)],
          [{ text: 'Pre-sentence report', style: 'fontBold' }, yesNo(data.preSentenceReport), {
            text: 'Probation case records',
            style: 'fontBold'
          }, yesNo(data.probationCaseRecords)],
          [{ text: 'Judges comments', style: 'fontBold' }, yesNo(data.judgesComments), {
            text: 'Other',
            style: 'fontBold'
          }, yesNo(data.other)]
        ]
      }
    },
    data.other ? { text: 'Other documents', style: 'fieldHeading' } : [],
    data.other ? data.otherDocuments : [],
    { text: 'Reports, assessments and directions', style: 'fieldHeading' },
    data.reportsAssessmentsDirections || '',
    { text: 'Sources: issues and limitations', style: 'fieldHeading' },
    data.sourceLimitationExplanation || '',
  ];
};
