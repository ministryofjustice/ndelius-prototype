import { IRiskAssessment } from '../model/current-risk-assessment.model';

export class CurrentRiskAssessmentTransform {

  /**
   *
   * @param {IRiskAssessment} data
   * @returns {Object}
   */
  static process(data: IRiskAssessment): Array<any> {

    /**
     *
     * @param {string} score
     * @returns {number}
     */
    function getPercentage(score: string): number {
      const len = score.indexOf('%') !== -1 ? score.indexOf('%') : score.length;
      return parseInt(score.substr(0, len), 10);
    }

    /**
     *
     * @param {Array<number>} levels
     * @param {number} level
     * @param {string} score
     * @returns {string}
     */
    function getString(levels: Array<number>, level: number, score: string|number): string {
      if (!level || !score) {
        return '';
      }
      return (level < levels[0] ? 'Low' : level < levels[1] ? 'Medium' : level < levels[2] ? 'High' : 'Very High') + ' (' + score + ')';
    }

    return [
      { text: 'Current risk assessment', style: 'sectionHeading' },
      {
        style: 'tableDefault',
        table: {
          widths: ['*', '*'],
          body: [
            [{ text: 'RSR', style: 'fontBold' }, getString([3, 7, 10], data.rsrScore, data.rsrScore)],
            [{ text: 'OGRS3', style: 'fontBold' }, getString([50, 75, 90], getPercentage(data.ogrs3Percentage), data.ogrs3Percentage)],
            [{ text: 'OGP', style: 'fontBold' }, getString([34, 67, 85], getPercentage(data.ogpProbability), data.ogpProbability)],
            [{ text: 'OVP', style: 'fontBold' }, getString([30, 60, 80], getPercentage(data.ovpProbability), data.ovpProbability)],
            [{ text: 'Risk matrix 2000', style: 'fontBold' }, data.riskMatrix2000 || ''],
            [{ text: 'SARA', style: 'fontBold' }, data.sara || '']
          ]
        }
      }
    ];
  }

}
