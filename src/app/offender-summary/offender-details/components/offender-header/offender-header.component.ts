import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-offender-header',
  templateUrl: './offender-header.component.html'
})
export class OffenderHeaderComponent implements OnChanges {

  risk: string;
  @Input() public data: any;

  /**
   * Return a date string as DD/MM/YYYY
   * @param dateString
   * @returns {string}
   */
  pipeDate(dateString: string): string {
    if (!dateString) {
      return '';
    }
    const splitDate = dateString.substr(0, dateString.indexOf(' ')).split('-');
    return [splitDate[2], splitDate[1], splitDate[0]].join('/');
  }

  /**
   *
   */
  ngOnChanges() {
    if (!this.data) {
      return;
    }
    switch (this.data['CURRENT_HIGHEST_RISK_COLOUR']) {
      case 'Red':
        this.risk = 'high';
        break;
      case 'Amber':
        this.risk = 'medium';
        break;
      case 'Green':
        this.risk = 'low';
        break;
    }
  }

}
