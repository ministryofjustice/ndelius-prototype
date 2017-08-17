import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../_shared/reducer/state.reducers';

import { OffenderDetailsComponent } from './offender-details.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';

describe('Component: Offender details', () => {

  let fixture: ComponentFixture<OffenderDetailsComponent>;
  let component: OffenderDetailsComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OffenderDetailsComponent,
        MockNavigationComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        FormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderDetailsComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Offender details');
  });

  it('should include the offender details', () => {
    expect(component.reportData).toBeDefined();
    expect(component.reportData.name).toBe('Alan Smith');
    expect(component.reportData.dateOfBirth).toBe('06/02/1976');
    expect(component.reportData.age).toEqual(41);
    expect(component.reportData.address).toBe('1 Albert Square, Manchester, Greater Manchester, M60 2LA');
    expect(component.reportData.crn).toBe('B56789');
    expect(component.reportData.pnc).toBe('');
  });

  it('should navigate to the Court details page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.continueReport();
    expect(navigateSpy).toHaveBeenCalledWith(['court-details']);
  });

});
