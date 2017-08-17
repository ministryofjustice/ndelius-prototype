import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IOffenderDetails } from './model/offender-details.model';
import { getOffenderDetails } from './reducer/offender-details.reducer';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html'
})
export class OffenderDetailsComponent {

  reportData: IOffenderDetails;

  /**
   *
   * @param {Router} router
   * @param {Store<IOffenderDetails>} store
   */
  constructor(private router: Router, private store: Store<IOffenderDetails>) {
    store.select(getOffenderDetails).subscribe(data => {
      this.reportData = data;
    });
  }

  /**
   *
   */
  continueReport() {
    this.router.navigate(['court-details']);
  }

}
