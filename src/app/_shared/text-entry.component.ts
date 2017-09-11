import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

/**
 * Interface to be used for saving Object
 */
interface ISaving {
  active: boolean;
  timer: any;
  interval: any;
}

/**
 * The **text-entry** component is designed to simplify the creation of textarea based form controls
 * which can include help text, hint content and form error messages.
 *
 * The component also includes an **"autosave"** feature which displays a notification to the user and provides
 * an **EventEmitter** to notify any watchers that the user input should be saved
 *
 * **Shared component**
 *
 * @example
 * <app-text-entry [group]="myFormGroup" label="Some label text" name="myControlName" [error]="myFormError"
 * (onSaveContent)="mySaveContent()"></app-text-entry>
 */
@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html'
})
export class TextEntryComponent implements AfterViewInit, OnDestroy {

  /**
   * The control's parent FormGroup to be used as reference
   *
   * **Required**
   */
  @Input('group') public group: FormGroup;

  /**
   * The label for the textarea Element
   *
   * **Required**
   */
  @Input('label') public label: string;

  /**
   * The name of the FormControl
   *
   * **Required**
   *
   * This is also used to generate attributes like the DOM id where required
   */
  @Input('name') public name: string;

  /**
   * Additional help text to be displayed beneath the label Element
   */
  @Input('help') public help: string;

  /**
   * Flag to specify an error on submission of the parent form
   */
  @Input('error') public error: boolean;

  /**
   * Gain access to the 'hint' set within the child DOM
   */
  @ViewChild('hint') hint;

  /**
   * EventEmitter to notify any watchers that the user input should be saved
   *
   * This will call the supplied parent component method
   * @type {EventEmitter<any>}
   */
  @Output() onSaveContent = new EventEmitter();

  /**
   * Flag to determine the presence of the additional hint content
   */
  showHint: boolean;

  /**
   * Flag to show/hide the expanded content
   */
  expandContent: boolean;

  /**
   * Saving status Object
   * @type {Object}
   */
  saving: ISaving = {
    active: void 0,
    timer: void 0,
    interval: void 0
  };

  /**
   * Initiate saving user input data every n seconds
   */
  startSaving() {
    this.saving.interval = setInterval(() => {
      this.saveProgress(true);
    }, 8000);
  }

  /**
   * Save the user input data
   * @param {boolean} usingInterval Flag to specify if the method was called by the interval Function
   */
  saveProgress(usingInterval?: boolean) {

    const timer = this.saving.timer;
    const interval: number = this.saving.interval;
    const control: AbstractControl = this.group.get(this.name);

    if (timer) {
      clearTimeout(timer);
    }
    if (!usingInterval && interval) {
      clearInterval(interval);
    }

    if (control && control.value.toString().length) {
      this.saving.active = true;
      this.onSaveContent.emit();
      this.saving.timer = setTimeout(() => {
        this.saving.active = false;
      }, 1000);
    } else {
      this.saving.active = void 0;
    }
  }

  /**
   * Determine the presence of hint content to be included with the component
   */
  ngAfterViewInit() {
    // Check for hint content
    this.showHint = this.hint.nativeElement.children.length > 0;
  }

  /**
   * Clear timers
   */
  ngOnDestroy() {
    const timer = this.saving.timer;
    const interval: number = this.saving.interval;

    if (timer) {
      clearTimeout(timer);
    }
    if (interval) {
      clearInterval(interval);
    }
  }
}
