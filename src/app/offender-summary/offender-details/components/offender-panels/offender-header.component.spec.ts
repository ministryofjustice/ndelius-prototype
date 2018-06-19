import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderPanelsComponent } from './offender-panels.component';

describe('OffenderPanelsComponent', () => {
  let component: OffenderPanelsComponent;
  let fixture: ComponentFixture<OffenderPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
