import { AfterContentInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

interface ISaving {
  active: boolean;
  timer: any;
  interval: any;
}

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html'
})
export class TextEntryComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input('group') public group: FormGroup;
  @Input('label') public label: string;
  @Input('name') public name: string;
  @Input('help') public help: string;
  @Input('error') public error: boolean;

  @ViewChild('hint') hint;

  control: AbstractControl;
  showHint: boolean;
  expandContent: boolean;
  saving: ISaving = {
    active: void 0,
    timer: void 0,
    interval: void 0
  };

  /**
   * @constructor
   */
  constructor() {
    // Empty
  }

  /**
   *
   */
  startSaving() {
    this.saving.interval = setInterval(() => {
      this.saveProgress(true);
    }, 8000);
  }

  /**
   *
   * @param {boolean} usingInterval
   */
  saveProgress(usingInterval?: boolean) {

    const timer = this.saving.timer;
    const interval: number = this.saving.interval;

    if (timer) {
      clearTimeout(timer);
    }
    if (!usingInterval && interval) {
      clearInterval(interval);
    }

    if (this.control && this.control.value.toString().length) {
      this.saving.active = true;
      this.saving.timer = setTimeout(() => {
        this.saving.active = false;
      }, 3000);
    } else {
      this.saving.active = void 0;
    }
  }

  /**
   *
   */
  ngOnInit() {
    this.control = this.group.get(this.name);
  }

  /**
   *
   */
  ngAfterContentInit() {
    // Check for hint content
    this.showHint = this.hint.nativeElement.children.length > 0;
  }

  /**
   *
   */
  ngOnDestroy() {

    console['log']('DESTROY ALL FISH');

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
