import { Injectable } from '@angular/core';

import { IReportData } from './model/report-data';

@Injectable()
export class ReportDataService {

  private reportData: IReportData;

  constructor() {
    // Empty
  }

  /**
   *
   * @returns {IReportData}
   */
  getReportData(): IReportData {
    return this.reportData;
  }

  /**
   *
   * @param {string} section
   * @returns {Object}
   */
  getReportSection(section: string): Object {
    return this.reportData[section];
  }

  /**
   *
   * @param {Object} updatedData
   */
  updateReportData(updatedData: Object) {
    this.reportData = Object.assign({}, this.reportData, updatedData);
  }

}
