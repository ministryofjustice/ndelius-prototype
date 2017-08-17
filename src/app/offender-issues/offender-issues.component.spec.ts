import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { OffenderIssuesComponent } from './offender-issues.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';

describe('Component: Offender assessment issues', () => {

  let fixture: ComponentFixture<OffenderIssuesComponent>;
  let component: OffenderIssuesComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OffenderIssuesComponent,
        MockNavigationComponent
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
    fixture = TestBed.createComponent(OffenderIssuesComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Offender assessment issues');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });

  it('should navigate to the Offender assessment detail page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit({ value: {} });
    expect(navigateSpy).toHaveBeenCalledWith(['offender-assessment']);
  });

});
