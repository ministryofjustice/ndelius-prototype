import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { PrisonerDetailsComponent } from './prisoner-details.component';
import { MockSubNavigationComponent } from '../../_shared/components/sub-navigation.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockErrorMessagesComponent } from '../../_shared/components/error-messages/error-messages.mock.component';
import { MockFooterComponent } from '../_shared/components/footer/footer.component.mock';

import * as model from './reducer/prisoner-details.reducer';

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
    expect(navigateSpy).toHaveBeenCalledWith(['parom1-omic/court-details']);
  });

});
