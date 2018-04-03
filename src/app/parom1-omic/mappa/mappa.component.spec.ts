import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { MappaComponent } from './mappa.component';
import { MockSubNavigationComponent } from '../../_shared/components/sub-navigation.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockErrorMessagesComponent } from '../../_shared/components/error-messages/error-messages.mock.component';
import { MockFooterComponent } from '../../_shared/components/footer.mock.component';
import { MockTextEntryComponent } from '../../_shared/components/text-entry/text-entry.mock.component';

import * as model from './reducer/mappa.reducer';

describe('PAROM1-OMIC - Component: MAPPA', () => {

  let fixture: ComponentFixture<MappaComponent>;
  let component: MappaComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MappaComponent,
        MockSubNavigationComponent,
        MockPhaseBannerComponent,
        MockErrorMessagesComponent,
        MockFooterComponent,
        MockTextEntryComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        DatePipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappaComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Multi Agency Public Protection Arrangements (MAPPA)');
  });

  it('should navigate to the Court details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    // Age is calculated from dateOfBirth so we need to supply in the test
    component.onSubmit({ valid: true, value: model.initialState });
    expect(navigateSpy).toHaveBeenCalledWith(['parom1-omic/current-risk-assessment']);
  });

});
