import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignTermsComponent } from './sign-terms.component';

describe('SignTermsComponent', () => {
  let component: SignTermsComponent;
  let fixture: ComponentFixture<SignTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
