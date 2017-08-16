import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ErrorMessagesComponent } from './error-messages.component';

describe('Component: Error Messages (shared)', () => {

  let fixture: ComponentFixture<ErrorMessagesComponent>;
  let component: ErrorMessagesComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorMessagesComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessagesComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
    component.control = 'someControl';
    component.active = false;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should accept inputs', () => {
    expect(component.control).toBe('someControl');
    expect(component.active).toBeFalsy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('span').innerHTML).toBe('This field is required');
  });

});
