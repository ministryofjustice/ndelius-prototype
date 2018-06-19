import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderContactComponent } from './offender-contact.component';

describe('OffenderContactComponent', () => {
  let component: OffenderContactComponent;
  let fixture: ComponentFixture<OffenderContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
