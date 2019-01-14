import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-offender-panels',
  templateUrl: './offender-panels.component.html'
})
export class OffenderPanelsComponent implements OnChanges {

  staffRisk: boolean;
  activeEvents: number;
  @Input() public data: any;

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    this.activeEvents = this.data['EVENTS'].filter((item) => {
      return !!item.active;
    }).length;

    this.staffRisk = !!this.data['RISK_REGISTERS'].find(option => option.description === 'Staff');
  }

}
