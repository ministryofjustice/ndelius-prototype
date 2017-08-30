import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html'
})
export class ErrorMessagesComponent {

  @Input('control') public control: string;
  @Input('active') public active: boolean;

}
