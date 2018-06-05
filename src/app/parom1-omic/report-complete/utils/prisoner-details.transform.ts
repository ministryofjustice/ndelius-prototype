import { IPrisonerDetails } from '../../prisoner-details/model/prisoner-details.model';
import { pipeDate } from '../../../_shared/utils/utils';

export const prisonerDetailsTranform = (data: IPrisonerDetails) => {

  /**
   *
   * @returns {Array<any>}
   */
  function getSentenceInfo(): Array<any> {
    return data.sentenceType && data.sentenceType === 'Determinate' ?
      [[{ text: 'Release/eligibility date', style: 'fontBold' }, pipeDate(data.determinateReleaseDate)]] :
      [[{ text: 'Tariff length', style: 'fontBold' }, data.tariffLength || ''],
        [{ text: 'Tariff expiry date', style: 'fontBold' }, pipeDate(data.tariffExpiryDate)]];
  }

  return [
    { text: 'Prisoner details', style: 'sectionHeading' },
    {
      style: 'tableDefault',
      table: {
        widths: [150, '*'],
        body: [
          [{ text: 'Prisoner\'s full name', style: 'fontBold' }, data.name || ''],
          [{ text: 'Prison number', style: 'fontBold' }, data.prisonNumber || ''],
          [{ text: 'NOMIS number', style: 'fontBold' }, data.nomisNumber || ''],
          [{ text: 'Prison or YOI', style: 'fontBold' }, data.prison ? data.prison.substring(data.prison.indexOf(':') + 1)  : ''],
          [{ text: 'Prisoner\'s category', style: 'fontBold' }, data.category || ''],
          [{ text: 'Sentence', style: 'fontBold' }, data.sentence || ''],
          [{ text: 'Sentence type', style: 'fontBold' }, data.sentenceType || '']
        ].concat(getSentenceInfo())
      }
    }
  ];
};
