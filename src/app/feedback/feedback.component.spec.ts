import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedbackComponent } from './feedback.component';
import { MockErrorMessagesComponent } from '../_shared/error-messages.mock.component';

describe('FeedbackComponent', () => {

  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedbackComponent,
        MockErrorMessagesComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Feedback');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });

  it('should set error property if form is invalid and NOT navigate', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit(false);
    expect(component.formError).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should navigate to the Start your Report page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit(true);
    expect(component.formError).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['start-report']);
  });

});