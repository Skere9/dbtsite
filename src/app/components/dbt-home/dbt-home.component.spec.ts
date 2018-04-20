import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtHomeComponent } from './dbt-home.component';

describe('DbtHomeComponent', () => {
  let component: DbtHomeComponent;
  let fixture: ComponentFixture<DbtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
