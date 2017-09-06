import { AfterContentInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
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
export class TextEntryComponent implements AfterContentInit, OnDestroy {

  @Input('group') public group: FormGroup;
  @Input('label') public label: string;
  @Input('name') public name: string;
  @Input('help') public help: string;
  @Input('error') public error: boolean;

  @ViewChild('hint') hint;

  @Output() onSaveContent = new EventEmitter();

  showHint: boolean;
  expandContent: boolean;
  saving: ISaving = {
    active: void 0,
    timer: void 0,
    interval: void 0
  };

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
      }, 3000);
    } else {
      this.saving.active = void 0;
    }
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
