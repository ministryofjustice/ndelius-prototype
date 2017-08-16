import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { InformationSourcesComponent } from './information-sources.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';

describe('Component: Sources of information', () => {

  let fixture: ComponentFixture<InformationSourcesComponent>;
  let component: InformationSourcesComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InformationSourcesComponent,
        MockNavigationComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSourcesComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Sources of information');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });

  it('should navigate to the Offence Details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalledWith(['offence-details']);
  });

});
