import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { OffendingPatternsComponent } from './offending-patterns.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';
import { MockErrorMessagesComponent } from '../_shared/error-messages.mock.component';

describe('Component: Patterns of offending', () => {

  let fixture: ComponentFixture<OffendingPatternsComponent>;
  let component: OffendingPatternsComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OffendingPatternsComponent,
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
    fixture = TestBed.createComponent(OffendingPatternsComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Patterns of offending');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });

  it('should navigate to the Risk assessment page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ value: {} });
    expect(navigateSpy).toHaveBeenCalledWith(['risk-assessment']);
  });

});
