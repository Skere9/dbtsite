import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtForgotPasswordComponent } from './dbt-forgot-password.component';

describe('DbtForgotPasswordComponent', () => {
  let component: DbtForgotPasswordComponent;
  let fixture: ComponentFixture<DbtForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
