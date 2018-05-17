import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { AddendumDetailComponent } from './addendum-detail.component';
import { MockFooterComponent } from '../../_shared/components/footer/footer.mock.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockSubNavigationComponent } from '../_shared/components/sub-navigation.mock.component';
import { MockTextEntryComponent } from '../../_shared/components/text-entry/text-entry.mock.component';
import { MockFormErrorComponent } from '../../_shared/components/form-error/form-error.mock.component';
import { MockErrorMessagesComponent } from '../../_shared/components/error-messages/error-messages.mock.component';

import * as model from './reducer/addendum-detail.reducer';

describe('Addendum - Component: Addendum detail', () => {

  let fixture: ComponentFixture<AddendumDetailComponent>;
  let component: AddendumDetailComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AddendumDetailComponent,
        MockFormErrorComponent,
        MockSubNavigationComponent,
        MockPhaseBannerComponent,
        MockTextEntryComponent,
        MockErrorMessagesComponent,
        MockFooterComponent
      ],
      providers: [
        DatePipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddendumDetailComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Addendum detail');
  });

  it('should include the pre-populated reactive form', () => {
    expect(component.reportForm).toBeDefined();
    expect(component.reportForm.get('detail').value).toBe('');
  });

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
    expect(navigateSpy).toHaveBeenCalledWith(['psr-addendum/signature']);
  });

});
