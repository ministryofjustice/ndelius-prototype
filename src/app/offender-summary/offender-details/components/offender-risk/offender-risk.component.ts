import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-offender-risk',
  templateUrl: './offender-risk.component.html'
})
export class OffenderRiskComponent implements OnChanges {

  @Input() public data: any;

  ngOnChanges() {
    if (this.data) {
      this.data.RISK_REGISTERS = !this.data.RISK_REGISTERS ? [] : this.data.RISK_REGISTERS;
    }
  }
}
