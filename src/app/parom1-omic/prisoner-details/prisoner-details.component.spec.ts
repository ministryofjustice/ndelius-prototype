import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { PrisonerDetailsComponent } from './prisoner-details.component';
import { MockSubNavigationComponent } from '../../_shared/components/sub-navigation.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockErrorMessagesComponent } from '../../_shared/components/error-messages/error-messages.mock.component';
import { MockFooterComponent } from '../../_shared/components/footer/footer.mock.component';
import { MockFormErrorComponent } from '../../_shared/components/form-error/form-error.mock.component';
import { MockInputComponent } from '../../_shared/components/input/input.mock.component';
import { MockRadioButtonsComponent } from '../../_shared/components/radio-buttons/radio-buttons.mock.component';
import { MockThreeFieldDateComponent } from '../../_shared/components/three-field-date/three-field-date.mock.component';

import * as model from './reducer/prisoner-details.reducer';
import { MockTextEntryComponent } from '../../_shared/components/text-entry/text-entry.mock.component';

describe('PAROM1-OMIC - Component: Prisoner details', () => {

  let fixture: ComponentFixture<PrisonerDetailsComponent>;
  let component: PrisonerDetailsComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PrisonerDetailsComponent,
        MockSubNavigationComponent,
        MockPhaseBannerComponent,
        MockErrorMessagesComponent,
        MockFormErrorComponent,
        MockInputComponent,
        MockRadioButtonsComponent,
        MockThreeFieldDateComponent,
        MockTextEntryComponent,
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
    fixture = TestBed.createComponent(PrisonerDetailsComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Prisoner details');
  });

  it('should navigate to the Court details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    // Age is calculated from dateOfBirth so we need to supply in the test
    component.onSubmit({ valid: true, value: model.initialState });
    expect(navigateSpy).toHaveBeenCalledWith(['parom1-omic/prisoner-knowledge']);
  });

});
