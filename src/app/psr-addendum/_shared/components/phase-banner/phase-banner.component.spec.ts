import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PhaseBannerComponent } from './phase-banner.component';

describe('Addendum - Component: Navigation (shared)', () => {

  let fixture: ComponentFixture<PhaseBannerComponent>;
  let component: PhaseBannerComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhaseBannerComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseBannerComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('strong').innerHTML).toBe('PROTOTYPE');
  });

});
