import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { OffenceAnalysisComponent } from './offence-analysis.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';
import { MockErrorMessagesComponent } from '../_shared/error-messages.mock.component';

describe('Component: Offence analysis', () => {

  let fixture: ComponentFixture<OffenceAnalysisComponent>;
  let component: OffenceAnalysisComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OffenceAnalysisComponent,
        MockNavigationComponent,
        MockErrorMessagesComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenceAnalysisComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Offence analysis');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });
  it('should set error property if form is invalid and NOT navigate', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit(false);
    expect(component.formError).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });


  it('should navigate to the Offence details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit(true);
    expect(component.formError).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['offender-issues']);
  });
});
