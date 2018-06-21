import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offender-chronology',
  templateUrl: './offender-chronology.component.html'
})
export class OffenderChronologyComponent {

  @Input() public data: any;

  offenderChronology = [
    {
      primaryOffence: 'Sexual assault on a female (Sexual Offences Act 2003) - 02005',
      status: 'Short Format Pre-Sentence Report (adjourned)',
      date: '27/06/2018',
      active: true,
      route: '/sfpsr'
    },
    {
      primaryOffence: 'Displaying indecent matter - 08603',
      status: 'CJA Community Order (12 months)',
      date: '18/02/2017',
      active: false
    },
    {
      primaryOffence: 'Disorderly behaviour - 16200',
      status: 'CJA Community Order (6 months)',
      date: '15/05/2015',
      active: false
    }
  ];

  /**
   *
   * @param {Router} router
   */
  constructor(private router: Router) {
    // Empty
  }

  /**
   *
   */
  startSFPSR() {
    this.router.navigate(['/sfpsr'], { queryParamsHandling: 'preserve' });
  }

}
