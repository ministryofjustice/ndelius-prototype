import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input, NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription, timer } from 'rxjs';

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
export class TextEntryComponent implements OnInit, OnDestroy, AfterViewInit {

  /**
   * The control's parent FormGroup to be used as reference
   *
   * **Required**
   */
  @Input() public group: FormGroup;

  /**
   * The label for the textarea Element
   *
   * **Required**
   */
  @Input() public label: string;

  /**
   * The name of the FormControl
   *
   * **Required**
   *
   * This is also used to generate attributes like the DOM id where required
   */
  @Input() public name: string;

  /**
   * Additional help text to be displayed beneath the label Element
   */
  @Input() public help: string;

  /**
   * Flag to specify an error on submission of the parent form
   */
  @Input() public error: boolean;

  /**
   * Specify a character count soft limit (used to display a recommended character count)
   */
  @Input() public limit: number;

  /**
   * Error message to be displayed when the field is required
   */
  @Input() public errorMessage = 'This field is required';

  /**
   *
   * @type {string}
   */
  @Input() public classic: boolean;

  /**
   * Gain access to the 'hint' set within the child DOM
   */
  @ViewChild('hint') hint;

  /**
   * Gain access to the textarea Element
   */
  @ViewChild('textArea') textArea;

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
   *
   */
  placeholder: string;

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
   * Listener used for recommended character count
   */
  private rendererListener: Function;

  /**
   *
   */
  private currentContent: string;

  /**
   *
   */
  limitText: string;

  /**
   * @constructor
   * @param {NgZone} ngZone ngZone
   * @param {Renderer2} renderer Renderer2
   * @param {ChangeDetectorRef} ref ChangeDetectorRef
   */
  constructor(private ngZone: NgZone, private renderer: Renderer2, private ref: ChangeDetectorRef) {
    // Empty
  }

  /**
   * Initiate saving user input data every n seconds
   */
  startSaving() {
    this.ngZone.runOutsideAngular(() => {
      const timerObs = timer(5000, 5000);
      this.saving.interval = timerObs.subscribe(() => {
        this.ngZone.run(() => {
          this.saveProgress(true);
        });
      });
    });
  }

  /**
   * Save the user input data
   * @param {boolean} [usingInterval] Flag to specify if the method was called by the interval Function
   */
  saveProgress(usingInterval?: boolean) {

    let timerSub: Subscription = this.saving.timer;
    const interval: Subscription = this.saving.interval;
    const currentValue = this.group.get(this.name).value.toString();

    if (timerSub) {
      timerSub.unsubscribe();
    }
    if (!usingInterval && interval) {
      interval.unsubscribe();
    }

    if (currentValue.length) {

      // Check the content for changes
      if (currentValue !== this.currentContent) {
        this.saving.active = true;
        this.onSaveContent.emit();

        this.ngZone.runOutsideAngular(() => {
          const pause = timer(1000);
          timerSub = pause.subscribe(() => {
            this.ngZone.run(() => {
              this.saving.active = false;
              timerSub.unsubscribe();
            });
          });
        });
      }

    } else {
      this.saving.active = void 0;
    }

    // Store the current content
    this.currentContent = currentValue;
  }

  /**
   * Event fired on keyup - used to update/check optional character count recommendation
   */
  private onKeyUp() {
    if (this.limit) {
      this.limitText = this.limit + ' recommended characters, you have used ' + this.textArea.nativeElement.value.length;
    }
  }

  /**
   * Determine the presence of hint content to be included with the component
   */
  ngOnInit() {
    this.showHint = this.hint.nativeElement.children.length > 0;
    this.placeholder = this.classic ? '' : 'Start typing here...';
  }

  /**
   * If limit is supplied setup listener and trigger count
   */
  ngAfterViewInit() {
    if (this.limit) {
      this.limitText = this.limit + ' recommended characters';
      this.rendererListener = this.renderer.listen(this.textArea.nativeElement, 'keyup', this.onKeyUp.bind(this));
      this.onKeyUp();
      this.ref.detectChanges();
    }
  }

  /**
   * Cleanup timers and listeners on destroy
   */
  ngOnDestroy() {
    const timerSub: Subscription = this.saving.timer;
    const interval: Subscription = this.saving.interval;
    const listener: Function = this.rendererListener;

    if (timerSub) {
      timerSub.unsubscribe();
    }
    if (interval) {
      interval.unsubscribe();
    }
    if (listener) {
      listener();
    }
  }
}
