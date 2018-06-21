import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-risk',
  templateUrl: './offender-risk.component.html'
})
export class OffenderRiskComponent {

  @Input() public data: any;

  riskData = [
    {
      level: 'high',
      type: 'Safeguarding',
      details: 'Weapons',
      date: '21/11/2017',
      information: 'No data',
      active: false
    },
    {
      level: 'medium',
      type: 'Public protection',
      details: 'Domestic violence',
      date: '18/10/2016',
      information: 'No data',
      active: false
    },
    {
      level: 'low',
      type: 'RoSH',
      details: 'Children',
      date: '03/09/2015',
      information: 'No data',
      active: false
    },
    {
      level: 'very high',
      type: 'Information',
      details: 'Home Office Interest',
      date: '21/11/2017',
      information: 'No data',
      active: false
    }
  ];

}
