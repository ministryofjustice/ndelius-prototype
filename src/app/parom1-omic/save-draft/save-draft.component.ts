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

  constructor(private router: Router) {
    // Empty
  }


  startOver() {
    this.router.navigate(['parom1-omic/prisoner-details']);
  }
}
