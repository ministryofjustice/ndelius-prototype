import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';
import { CheckReportComponent } from './check-report.component';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';
import { MockFooterComponent } from '../../_shared/components/footer/footer.mock.component';
import { MockNoticeComponent } from '../../_shared/components/notice/notice.mock.component';

describe('PAROM1-OMIC - CheckReportComponent', () => {

  let component: CheckReportComponent;
  let fixture: ComponentFixture<CheckReportComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckReportComponent,
        MockNoticeComponent,
        MockPhaseBannerComponent,
        MockFooterComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckReportComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
