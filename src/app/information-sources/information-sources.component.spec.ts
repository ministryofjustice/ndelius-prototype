import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { InformationSourcesComponent } from './information-sources.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';

import * as model from './reducer/information-sources.reducer';

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
        StoreModule.forRoot(reducers),
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
    component.onSubmit({ value: model.initialState });
    expect(navigateSpy).toHaveBeenCalledWith(['offence-details']);
  });

});
