import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { CourtDetailsComponent } from './court-details.component';
import { MockFooterComponent } from '../../_shared/components/footer/footer.mock.component';
import { MockSubNavigationComponent } from '../_shared/components/sub-navigation.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockErrorMessagesComponent } from '../../_shared/components/error-messages/error-messages.mock.component';
import { MockFormErrorComponent } from '../../_shared/components/form-error/form-error.mock.component';
import { MockInputComponent } from '../../_shared/components/input/input.mock.component';
import { MockThreeFieldDateComponent } from '../../_shared/components/three-field-date/three-field-date.mock.component';

import * as model from './reducer/court-details.reducer';

describe('Addendum - Component: Court details', () => {

  let fixture: ComponentFixture<CourtDetailsComponent>;
  let component: CourtDetailsComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        CourtDetailsComponent,
        MockFormErrorComponent,
        MockSubNavigationComponent,
        MockPhaseBannerComponent,
        MockErrorMessagesComponent,
        MockInputComponent,
        MockFooterComponent,
        MockThreeFieldDateComponent
      ],
      providers: [
        DatePipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtDetailsComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
      expect(compiled.querySelector('h1').innerHTML).toBe('Sentencing court details');
  });

  /*
  it('should include the pre-populated reactive form', () => {
    expect(component.reportForm).toBeDefined();
    expect(component.reportForm.get('court').value).toBe('Manchester and Salford Magistrates Court');
  });
  */

  it('should set error property if form is invalid and NOT navigate', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ valid: false, value: model.initialState });
    expect(component.formError).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should navigate to the Sources of Information page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ valid: true, value: model.initialState });
    expect(component.formError).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['psr-addendum/addendum-detail']);
  });

});
