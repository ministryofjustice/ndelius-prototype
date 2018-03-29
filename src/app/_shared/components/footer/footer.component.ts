import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * The *footer** component is designed to simply display the footer Elements and saved status
 *
 * **Shared component**
 *
 * @example
 * <app-parom1-footer></app-parom1-footer>
 */
@Component({
  selector: 'app-parom1-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(private router: Router) {
    // Empty
  }

  /**
   *
   */
  saveDraft() {
    this.router.navigate(['parom1-omic/save-draft']);
  }

}
