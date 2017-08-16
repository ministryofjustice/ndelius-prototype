import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDraftComponent } from './save-draft.component';

describe('Component: Save draft', () => {

  let component: SaveDraftComponent;
  let fixture: ComponentFixture<SaveDraftComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDraftComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDraftComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Short Format Pre-Sentence Report');
    expect(compiled.querySelector('h2').innerHTML).toBe('Draft report saved');
  });

});
