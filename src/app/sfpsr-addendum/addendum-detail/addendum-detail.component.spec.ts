import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ShareBaseModule } from '../../_shared/share-base.module';
import { reducers } from '../../sfpsr/_shared/reducer/state.reducers';

import { AddendumDetailComponent } from './addendum-detail.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';
import { MockErrorMessagesComponent } from '../../_shared/error-messages.mock.component';

import * as model from './reducer/addendum-detail.reducer';

describe('Component: Addendum detail', () => {

  let fixture: ComponentFixture<AddendumDetailComponent>;
  let component: AddendumDetailComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddendumDetailComponent,
        MockNavigationComponent,
        MockErrorMessagesComponent
      ],
      imports: [
        ShareBaseModule,
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
    expect(navigateSpy).toHaveBeenCalledWith(['sfpsr-addendum/signature']);
  });

});
