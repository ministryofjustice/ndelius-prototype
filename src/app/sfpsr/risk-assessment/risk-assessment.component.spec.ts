import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { RiskAssessmentComponent } from './risk-assessment.component';
import { MockSubNavigationComponent } from '../../_shared/components/sub-navigation.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockTextEntryComponent } from '../../_shared/components/text-entry/text-entry.mock.component';
import { MockFooterComponent } from '../../_shared/components/footer/footer.mock.component';
import { MockFormErrorComponent } from '../../_shared/components/form-error/form-error.mock.component';
import { MockRadioButtonsComponent } from '../../_shared/components/radio-buttons/radio-buttons.mock.component';

import * as model from './reducer/risk-assessment.reducer';

describe('SFPSR - Component: Risk assessment', () => {

  let fixture: ComponentFixture<RiskAssessmentComponent>;
  let component: RiskAssessmentComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RiskAssessmentComponent,
        MockFormErrorComponent,
        MockSubNavigationComponent,
        MockPhaseBannerComponent,
        MockTextEntryComponent,
        MockRadioButtonsComponent,
        MockFooterComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAssessmentComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Risk assessment');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });

  it('should set error property if form is invalid and NOT navigate', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ valid: false, value: model.initialState });
    expect(component.formError).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should navigate to the Risk of serious harm page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ valid: true, value: model.initialState });
    expect(component.formError).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['sfpsr/proposed-sentence']);
  });

});
