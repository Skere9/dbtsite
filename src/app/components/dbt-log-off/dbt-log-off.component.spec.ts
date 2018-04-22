import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtLogOffComponent } from './dbt-log-off.component';

describe('DbtLogOffComponent', () => {
  let component: DbtLogOffComponent;
  let fixture: ComponentFixture<DbtLogOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtLogOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtLogOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
