import { ISources } from '../../sources/model/sources.model';
import { pipeYesNo } from '../../../_shared/utils/utils';

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
          }, pipeYesNo(data.previousConvictions), {
            text: 'Previous parole reports',
            style: 'fontBold'
          }, pipeYesNo(data.previousParoleReports)],
          [{ text: 'CPS documents', style: 'fontBold' }, pipeYesNo(data.cpsDocuments), {
            text: 'Parole dossier',
            style: 'fontBold'
          }, pipeYesNo(data.paroleDossier)],
          [{ text: 'Pre-sentence report', style: 'fontBold' }, pipeYesNo(data.preSentenceReport), {
            text: 'Probation case records',
            style: 'fontBold'
          }, pipeYesNo(data.probationCaseRecords)],
          [{ text: 'Judges comments', style: 'fontBold' }, pipeYesNo(data.judgesComments), {
            text: 'Other',
            style: 'fontBold'
          }, pipeYesNo(data.other)]
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
