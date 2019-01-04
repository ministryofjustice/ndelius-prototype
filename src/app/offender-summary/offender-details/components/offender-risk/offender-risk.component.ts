import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-offender-risk',
  templateUrl: './offender-risk.component.html'
})
export class OffenderRiskComponent implements OnChanges {

  @Input() public data: any;

  staffRisk = false;

  ngOnChanges() {
    if (this.data) {
      this.data.RISK_REGISTERS = !this.data.RISK_REGISTERS ? [] : this.data.RISK_REGISTERS;
      this.staffRisk = !!this.data['RISK_REGISTERS'].find(option => option.description === 'Staff');
    }
  }
}
