import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { RiskReoffendingComponent } from './risk-reoffending.component';
import { MockSubNavigationComponent } from '../../_shared/components/sub-navigation.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockErrorMessagesComponent } from '../../_shared/components/error-messages/error-messages.mock.component';
import { MockFooterComponent } from '../../_shared/components/footer/footer.mock.component';
import { MockTextEntryComponent } from '../../_shared/components/text-entry/text-entry.mock.component';
import { MockFormErrorComponent } from '../../_shared/components/form-error/form-error.mock.component';
import { MockRadioButtonsComponent } from '../../_shared/components/radio-buttons/radio-buttons.mock.component';

import * as model from './reducer/risk-reoffending.reducer';
import { MockInputComponent } from '../../_shared/components/input/input.mock.component';

describe('PAROM1-OMIC - Component: Risk of re-offending', () => {

  let fixture: ComponentFixture<RiskReoffendingComponent>;
  let component: RiskReoffendingComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RiskReoffendingComponent,
        MockSubNavigationComponent,
        MockPhaseBannerComponent,
        MockErrorMessagesComponent,
        MockFooterComponent,
        MockTextEntryComponent,
        MockRadioButtonsComponent,
        MockInputComponent,
        MockFormErrorComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskReoffendingComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Risk of re-offending');
  });

  it('should navigate to the Court details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    // Age is calculated from dateOfBirth so we need to supply in the test
    component.onSubmit({ valid: true, value: model.initialState });
    expect(navigateSpy).toHaveBeenCalledWith(['parom1-omic/risk-community']);
  });

});
