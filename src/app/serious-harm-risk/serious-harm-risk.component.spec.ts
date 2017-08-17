import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { SeriousHarmRiskComponent } from './serious-harm-risk.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';
import { MockErrorMessagesComponent } from '../_shared/error-messages.mock.component';

describe('Component: Risk of serious harm', () => {

  let fixture: ComponentFixture<SeriousHarmRiskComponent>;
  let component: SeriousHarmRiskComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SeriousHarmRiskComponent,
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
    fixture = TestBed.createComponent(SeriousHarmRiskComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Risk of serious harm');
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

  it('should navigate to the Proposed sentence page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ valid: true, value: {} });
    expect(component.formError).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['proposed-sentence']);
  });

});
