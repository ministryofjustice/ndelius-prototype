import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { OffenderDetailsComponent } from './offender-details.component';
import { MockSubNavigationComponent } from '../../_shared/components/sub-navigation.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockFooterComponent } from '../../_shared/components/footer/footer.mock.component';
import { MockFormErrorComponent } from '../../_shared/components/form-error/form-error.mock.component';
import { MockThreeFieldDateComponent } from '../../_shared/components/three-field-date/three-field-date.mock.component';
import { MockTextEntryComponent } from '../../_shared/components/text-entry/text-entry.mock.component';
import { MockInputComponent } from '../../_shared/components/input/input.mock.component';

import * as model from './reducer/offender-details.reducer';

describe('SFPSR - Component: Offender details', () => {

  let fixture: ComponentFixture<OffenderDetailsComponent>;
  let component: OffenderDetailsComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OffenderDetailsComponent,
        MockFormErrorComponent,
        MockSubNavigationComponent,
        MockPhaseBannerComponent,
        MockThreeFieldDateComponent,
        MockTextEntryComponent,
        MockInputComponent,
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
    fixture = TestBed.createComponent(OffenderDetailsComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Offender details');
  });

  /*
  it('should include the offender details', () => {
    expect(component.reportData).toBeDefined();
    expect(component.reportData.name).toBe('Alan Smith');
    expect(component.reportData.dateOfBirth.day).toEqual(21);
    expect(component.reportData.dateOfBirth.month).toEqual(6);
    expect(component.reportData.dateOfBirth.year).toEqual(1976);
    expect(component.reportData.age).toBeDefined();
    expect(component.reportData.address).toBe('1 Albert Square, Manchester, Greater Manchester, M60 2LA');
    expect(component.reportData.pnc).toBe('B98793');
    expect(component.reportData.crn).toBe('X087946');
  });
  */

  it('should navigate to the Court details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    // Age is calculated from dateOfBirth so we need to supply in the test
    component.onSubmit({ valid: true, value: model.initialState });
    expect(navigateSpy).toHaveBeenCalledWith(['sfpsr/court-details']);
  });

});
