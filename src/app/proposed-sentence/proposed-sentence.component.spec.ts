import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProposedSentenceComponent } from './proposed-sentence.component';
import { MockNavigationComponent } from '../_shared/navigation.mock.component';
import { MockErrorMessagesComponent } from '../_shared/error-messages.mock.component';

describe('Component: Conclusion', () => {

  let fixture: ComponentFixture<ProposedSentenceComponent>;
  let component: ProposedSentenceComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProposedSentenceComponent,
        MockNavigationComponent,
        MockErrorMessagesComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedSentenceComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template', () => {
    expect(compiled.querySelector('h1').innerHTML).toBe('Conclusion');
  });

  it('should include the reactive form', () => {
    expect(component.reportForm).toBeDefined();
  });

  it('should set error property if form is invalid and NOT navigate', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit(false);
    expect(component.formError).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should navigate to the Signature page', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSubmit(true);
    expect(component.formError).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['signature']);
  });

});
