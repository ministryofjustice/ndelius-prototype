import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartReportComponent } from './start-report.component';

describe('StartReportComponent', () => {
  let component: StartReportComponent;
  let fixture: ComponentFixture<StartReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
