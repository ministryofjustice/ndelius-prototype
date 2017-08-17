import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { OffenderAssessmentComponent } from './offender-assessment.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';
import { MockErrorMessagesComponent } from '../_shared/error-messages.mock.component';

describe('Component: Offender assessment detail', () => {

  let fixture: ComponentFixture<OffenderAssessmentComponent>;
  let component: OffenderAssessmentComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OffenderAssessmentComponent,
        MockNavigationComponent,
        MockErrorMessagesComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderAssessmentComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Offender assessment detail');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });

  it('should set error property if form is invalid and NOT navigate', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ valid: false, value: {} });
    expect(component.formError).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should navigate to the Patterns of offending page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ valid: true, value: {} });
    expect(component.formError).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['offending-patterns']);
  });

});
