import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtSignInComponent } from './dbt-sign-in.component';

describe('DbtSignInComponent', () => {
  let component: DbtSignInComponent;
  let fixture: ComponentFixture<DbtSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
