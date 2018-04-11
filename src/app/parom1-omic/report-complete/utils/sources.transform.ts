import { ISources } from '../../sources/model/sources.model';
import { yesNo } from './utils';

export const sourcesTransform = (data: ISources) => {
  return [
    { text: 'Sources', style: 'sectionHeading' },
    { text: 'Site all sources of information used to inform this PARAM 1', style: 'fieldHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: ['*', 50, '*', 50],
        body: [
          [{
            text: 'Probation case records',
            style: 'fontBold'
          }, yesNo(data.probationCaseRecords), {
            text: 'Previous convictions',
            style: 'fontBold'
          }, yesNo(data.previousConvictions)],
          [{ text: 'Parole dossier', style: 'fontBold' }, yesNo(data.paroleDossier), {
            text: 'CPS documents',
            style: 'fontBold'
          }, yesNo(data.cpsDocuments)],
          [{ text: 'Pre-sentence report', style: 'fontBold' }, yesNo(data.preSentenceReport), {
            text: 'Previous parole reports',
            style: 'fontBold'
          }, yesNo(data.previousParoleReports)],
          [{ text: 'Judges comments', style: 'fontBold' }, yesNo(data.judgesComments), {
            text: 'Other',
            style: 'fontBold'
          }, yesNo(data.other)]
        ]
      }
    },
    { text: 'Other documents', style: 'fieldHeading' },
    data.otherDocuments,
    { text: 'Has any information not been made available to you or are there any limitations to the sources?', style: 'fieldHeading' },
    data.sourceLimitations,
    { text: 'Provide an explanation', style: 'fieldHeading' },
    data.sourceLimitationExplanation,
    { text: 'List all the reports, assessments and directions you have used for this PAROM 1', style: 'fieldHeading' },
    data.reportsAssessmentsDirections,
  ];
};
