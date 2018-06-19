import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderHeaderComponent } from './offender-header.component';

describe('OffenderHeaderComponent', () => {
  let component: OffenderHeaderComponent;
  let fixture: ComponentFixture<OffenderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
