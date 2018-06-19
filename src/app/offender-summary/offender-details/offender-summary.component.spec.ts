import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderSummaryComponent } from './offender-summary.component';

describe('OffenderDetailsComponent', () => {
  let component: OffenderSummaryComponent;
  let fixture: ComponentFixture<OffenderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
