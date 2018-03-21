import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SaveDraftComponent } from './save-draft.component';
import { reducers } from '../_shared/reducer/state.reducers';
import { MockPhaseBannerComponent } from '../../_shared/components/phase-banner.mock.component';

describe('PAROM1-OMIC - Component: Save draft', () => {

  let component: SaveDraftComponent;
  let fixture: ComponentFixture<SaveDraftComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SaveDraftComponent,
        MockPhaseBannerComponent
      ],
      imports: [
        StoreModule.forRoot(reducers)
      ]
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
    expect(compiled.querySelector('h1').innerHTML).toBe('Draft report saved');
  });

});
