import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TextEntryComponent } from './text-entry.component';
import { MockErrorMessagesComponent } from './error-messages.mock.component';

describe('Component: Text Entry (shared)', () => {

  let fixture: ComponentFixture<TextEntryComponent>;
  let component: TextEntryComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextEntryComponent,
        MockErrorMessagesComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEntryComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  */
});
