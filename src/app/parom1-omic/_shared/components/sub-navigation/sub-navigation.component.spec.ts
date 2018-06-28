import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SubNavigationComponent } from './sub-navigation.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducer/state.reducers';

describe('PAROM1-OMIC - Component: Navigation (shared)', () => {

  let fixture: ComponentFixture<SubNavigationComponent>;
  let component: SubNavigationComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubNavigationComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        RouterTestingModule.withRoutes([])
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavigationComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('.moj-left-navigation').innerHTML).toBe('- Prisoner details');
  });

});
