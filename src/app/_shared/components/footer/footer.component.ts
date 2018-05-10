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

  @Input() public continueEnabled = true;
  @Input() public draftEnabled = true;
  @Input() public label = 'Continue';
  @Input() public hint = 'Continue your report';
  @Input() public continue = () => {};

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
