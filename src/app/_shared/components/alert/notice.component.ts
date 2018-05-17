import { Component, Input } from '@angular/core';

/**
 * The **notice** component is designed to simplify the display of important notice messages
 *
 * **Shared component**
 *
 * @example
 * <app-notice message="Some information here..."></app-notice>
 */
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html'
})
export class NoticeComponent {

  /**
   * Message to be displayed to the user
   *
   * **Required**
   */
  @Input() public message: string;

}
