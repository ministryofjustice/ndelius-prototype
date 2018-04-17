import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

/**
 * The *footer** component is designed to simply display the footer Elements and saved status
 *
 * **Shared component**
 *
 * @example
 * <app-footer></app-footer>
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  @Input('continueEnabled') public continueEnabled = true;
  @Input('draftEnabled') public draftEnabled = true;
  @Input('label') public label = 'Continue';
  @Input('hint') public hint = 'Continue your report';
  @Input('continue') public continue = () => {};

  constructor(private router: Router) {
    // Empty
  }

  /**
   *
   */
  saveDraft() {
    const url = this.router.url;
    this.router.navigate([url.substring(0, url.lastIndexOf('/')) + '/save-draft']);
  }

}
