import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StartReportComponent } from './start-report.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';

describe('Component: Start Report', () => {

  let fixture: ComponentFixture<StartReportComponent>;
  let component: StartReportComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartReportComponent,
        MockNavigationComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartReportComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Short Format Pre-Sentence Report');
  });

  it('should navigate to the Court Details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.startReport();
    expect(navigateSpy).toHaveBeenCalledWith(['offender-details']);
  });

});
