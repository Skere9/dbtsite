import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtMenu01Component } from './dbt-menu-01.component';

describe('DbtMenu01Component', () => {
  let component: DbtMenu01Component;
  let fixture: ComponentFixture<DbtMenu01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtMenu01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtMenu01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
