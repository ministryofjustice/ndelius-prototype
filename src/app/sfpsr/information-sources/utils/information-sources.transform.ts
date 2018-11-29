import { IInformationSources } from '../model/information-sources.model';

export class InformationSourcesTransform {

  static process(data: IInformationSources): Array<any> {
    const content: Array<any> = [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', 35, '*', 35],
          body: [
            [{ text: 'Sources of information', style: 'tableHeading', colSpan: 4 }, {}, {}, {}],
            [{ text: 'Interview', style: 'fontBold' }, data.interviewInformationSource ? '√' : '', {
              text: 'Service Records',
              style: 'fontBold'
            }, data.serviceRecordsInformationSource ? '√' : ''],
            [{ text: 'CPS Summary', style: 'fontBold' }, data.cpsSummaryInformationSource ? '√' : '', {
              text: 'Previous OASys Assessments',
              style: 'fontBold'
            }, data.oasysAssessmentsInformationSource ? '√' : ''],
            [{
              text: 'Previous Convictions',
              style: 'fontBold'
            }, data.previousConvictionsInformationSource ? '√' : '', {
              text: 'Victim Statement',
              style: 'fontBold'
            }, data.victimStatementInformationSource ? '√' : ''],
            [{ text: 'Sentencing guidelines', style: 'fontBold' }, data.guidelinesSource ? '√' : '', {
              text: 'Police information',
              style: 'fontBold'
            }, data.policeInformationSource ? '√' : ''],
            [{
              text: 'Safeguarding checks',
              style: 'fontBold'
            }, data.childrenServicesInformationSource ? '√' : '', {
              text: 'Domestic abuse call out information',
              style: 'fontBold'
            }, data.domesticAbuseSource ? '√' : '']
          ]
        }
      }
    ];

    if (data.otherInformationSource) {
      content.push([
        { text: 'Other', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.otherInformationDetails || ''
      ]);
    }

    return content;
  }
}
