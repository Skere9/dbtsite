import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtSignUpComponent } from './dbt-sign-up.component';

describe('DbtSignUpComponent', () => {
  let component: DbtSignUpComponent;
  let fixture: ComponentFixture<DbtSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
