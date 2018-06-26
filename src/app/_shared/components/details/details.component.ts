import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {

  @Input() public label: string;
  @Input() public hideBar: boolean;
  @Input() public isActive: boolean;

}
