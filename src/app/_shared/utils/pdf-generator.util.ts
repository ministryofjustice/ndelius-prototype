import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

export class PdfGeneratorUtil {

  reportTitle: string;
  shortName: string;
  reportAuthor: string;
  fileName: string;
  reportContent: Array<any>;

  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  private transformData() {

    this.reportContent = this.reportContent || [];

    return {
      info: {
        title: this.reportTitle,
        author: this.reportAuthor || ''
      },
      pageSize: 'A4',
      pageMargins: [40, 60, 40, 60],
      footer: (currentPage, pageCount) => {
        return {
          columns: [{ text: this.shortName, style: 'fontFooter' }, {
            text: currentPage.toString() + ' of ' + pageCount,
            alignment: 'right',
            style: 'fontFooter'
          }]
        };
      },
      content: this.reportContent,
      styles: {
        reportTitle: {
          fontSize: 18,
          bold: true
        },
        sectionHeading: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        fieldHeading: {
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableHeading: {
          fontSize: 16,
          bold: true,
          fillColor: '#eeeeee'
        },
        fontBold: {
          bold: true
        },
        fontFooter: {
          fontSize: 10,
          color: 'gray',
          margin: [40, 0]
        },
        tableDefault: {
          margin: [0, 15, 0, 0]
        }
      }
    };
  }

  generatePdf() {
    pdfMake.createPdf(this.transformData()).download(this.fileName + '_' + new Date().getTime() + '.pdf');
  }

}
