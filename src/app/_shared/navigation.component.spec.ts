import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('Component: Navigation (shared)', () => {

  let fixture: ComponentFixture<NavigationComponent>;
  let component: NavigationComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h3').innerHTML).toBe('Report sections');
  });

});
