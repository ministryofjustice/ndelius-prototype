import { TestBed, inject } from '@angular/core/testing';

import { CheckReportService } from './check-report.service';

describe('CheckReportService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckReportService]
    });
  });

  it('should be created', inject([CheckReportService], (service: CheckReportService) => {
    expect(service).toBeTruthy();
  }));

  it('should include configureItems method', inject([CheckReportService], (service: CheckReportService) => {
    expect(service.configureItems).toBeDefined();
  }));
});
