import { Component } from '@angular/core';
import { ISection, sections } from '../../model/sections';
import { select, Store } from '@ngrx/store';
import { getCurrentState, IState } from '../../reducer/state.reducers';

/**
 * The **sub-navigation** component is designed to simply display the report navigation Elements
 *
 * **Shared component**
 *
 * @example
 * <app-sub-navigation></app-sub-navigation>
 */
@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html'
})
export class SubNavigationComponent {

  isValid = true;
  sections: Array<ISection> = sections();

  constructor(private store: Store<IState>) {
    store.pipe(select(getCurrentState)).subscribe(currentState => {
      this.sections.forEach((item) => {
        const model = currentState[item.state];
        Object.assign(item, { saved: model.saved, valid: model.valid });
        if (!model.valid && !item.dataOnly) {
          this.isValid = false;
        }
      });
    });
  }

}
