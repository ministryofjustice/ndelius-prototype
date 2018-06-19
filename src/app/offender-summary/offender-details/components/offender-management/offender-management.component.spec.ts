import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderManagementComponent } from './offender-management.component';

describe('OffenderManagementComponent', () => {
  let component: OffenderManagementComponent;
  let fixture: ComponentFixture<OffenderManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
