import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ReportCompleteComponent } from './report-complete.component';
import { reducers } from '../_shared/reducer/state.reducers';

describe('Component: Report complete', () => {

  let component: ReportCompleteComponent;
  let fixture: ComponentFixture<ReportCompleteComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCompleteComponent ],
      imports: [
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCompleteComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Short Format Pre-sentence Report');
    expect(compiled.querySelector('h2').innerHTML).toBe('Report complete');
  });

});
