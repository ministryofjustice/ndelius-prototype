import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentState, IState } from '../../reducer/state.reducers';

import { ISection, sections } from '../../model/sections';

/**
 * The **navigation** component is designed to simply display the main application navigation Elements
 *
 * **Shared component**
 *
 * @example
 * <app-navigation></app-navigation>
 */
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {

  isValid = true;
  sections:Array<ISection> = sections();

  constructor(private store: Store<IState>) {
    store.select(getCurrentState).subscribe(currentState => {
      this.sections.forEach((item) => {
        const model = currentState[item.state];
        Object.assign(item, { saved: model.saved, valid: model.valid });
        if (!model.valid) {
          this.isValid = false;
        }
      });
    });
  }

}
