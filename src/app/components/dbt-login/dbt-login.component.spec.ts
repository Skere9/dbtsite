import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtLoginComponent } from './dbt-login.component';

describe('DbtLoginComponent', () => {
  let component: DbtLoginComponent;
  let fixture: ComponentFixture<DbtLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
