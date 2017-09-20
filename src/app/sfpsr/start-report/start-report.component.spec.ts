import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { StartReportComponent } from './start-report.component';
import { MockNavigationComponent } from '../_shared/components/navigation.mock.component';

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
        StoreModule.forRoot(reducers),
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
    expect(compiled.querySelector('h1').innerHTML).toBe('Short Format Pre-sentence Report');
  });

  it('should navigate to the Court Details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.startReport();
    expect(navigateSpy).toHaveBeenCalledWith(['sfpsr/offender-details']);
  });

});
