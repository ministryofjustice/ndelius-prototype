import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Save draft component
 */
@Component({
  selector: 'app-save-draft',
  templateUrl: './save-draft.component.html'
})
export class SaveDraftComponent {

  /**
   * @constructor
   * @param {Router} router
   */
  constructor(private router: Router) {
    // Empty
  }

  /**
   *
   */
  startOver() {
    this.router.navigate(['sfpsr/check-report']);
  }

}
