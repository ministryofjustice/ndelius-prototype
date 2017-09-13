import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Subscription';

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
   * Specify a character count soft limit (used to display a recommended character count)
   */
  @Input('limit') public limit: number;

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
   * Variable used to store initial help text to allow reset
   */
  private helpText: string;

  /**
   * @constructor
   * @param {Renderer2} renderer Renderer2
   * @param {ChangeDetectorRef} ref ChangeDetectorRef
   */
  constructor(private renderer: Renderer2, private ref: ChangeDetectorRef) {
    // Empty
  }

  /**
   * Initiate saving user input data every n seconds
   */
  startSaving() {
    const timer = TimerObservable.create(5000, 5000);
    this.saving.interval = timer.subscribe(() => {
      this.saveProgress(true);
    });
  }

  /**
   * Save the user input data
   * @param {boolean} [usingInterval] Flag to specify if the method was called by the interval Function
   */
  saveProgress(usingInterval?: boolean) {

    let timer: Subscription = this.saving.timer;
    const interval: Subscription = this.saving.interval;
    const control: AbstractControl = this.group.get(this.name);

    if (timer) {
      timer.unsubscribe();
    }
    if (!usingInterval && interval) {
      interval.unsubscribe();
    }

    if (control && control.value.toString().length) {
      this.saving.active = true;
      this.onSaveContent.emit();

      const pause = TimerObservable.create(1000);
      timer = pause.subscribe(() => {
        this.saving.active = false;
        timer.unsubscribe();
      });

    } else {
      this.saving.active = void 0;
    }
  }

  /**
   * Event fired on keyup - used to update/check optional character count recommendation
   */
  private onKeyUp() {
    if (!this.helpText) {
      return;
    }
    const currentCount = this.textArea.nativeElement.value.length;
    this.help = currentCount ? this.helpText + ', you have used ' + currentCount : this.helpText;
  }

  /**
   * Determine the presence of hint content to be included with the component
   */
  ngOnInit() {
    this.showHint = this.hint.nativeElement.children.length > 0;
  }

  /**
   * If limit is supplied setup listener and trigger count
   */
  ngAfterViewInit() {
    if (this.limit) {
      this.helpText = this.help;
      this.rendererListener = this.renderer.listen(this.textArea.nativeElement, 'keyup', this.onKeyUp.bind(this));
      this.onKeyUp();
      this.ref.detectChanges();
    }
  }

  /**
   * Cleanup timers and listeners on destroy
   */
  ngOnDestroy() {
    const timer: Subscription = this.saving.timer;
    const interval: Subscription = this.saving.interval;
    const listener: Function = this.rendererListener;

    if (timer) {
      timer.unsubscribe();
    }
    if (interval) {
      interval.unsubscribe();
    }
    if (listener) {
      listener();
    }
  }
}
