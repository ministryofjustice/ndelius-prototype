import { Component, Input } from '@angular/core';

import { ErrorMessagesComponent } from './error-messages.component';

@Component({
  selector: 'app-error-messages',
  template: ''
})
export class MockErrorMessagesComponent implements ErrorMessagesComponent {

  @Input('control') control: string;
  @Input('active') active: boolean;
  @Input('message') message = 'This field is required';

}
