import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CheckboxesComponent } from './checkboxes.component';

import { MockTextEntryComponent } from '../text-entry/text-entry.mock.component';
import { MockErrorMessagesComponent } from '../error-messages/error-messages.mock.component';

describe('Component: Checkboxes (shared)', () => {

  let fixture: ComponentFixture<CheckboxesComponent>;
  let component: CheckboxesComponent;
  let compiled: HTMLElement;
  let checkbox: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder
      ],
      declarations: [
        CheckboxesComponent,
        MockTextEntryComponent,
        MockErrorMessagesComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
    component.options = [
      { control: 'interviewInformationSource', label: 'Interview' }
    ];
    component.legend = 'Some checkboxes for checking';

    component.group = new FormGroup({
      interviewInformationSource: new FormControl()
    });

    fixture.detectChanges();
    checkbox = fixture.debugElement.query(By.css('#interviewInformationSource')).nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should accept inputs', () => {
    expect(component.options.length).toBe(1);
  });

  it('should include a checkbox', () => {
    expect(checkbox.checked).toBeFalsy();

    checkbox.click();
    fixture.detectChanges();

    expect(checkbox.checked).toBeTruthy();
  });

});
