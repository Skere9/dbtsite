import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtListComponent } from './dbt-list.component';

describe('DbtListComponent', () => {
  let component: DbtListComponent;
  let fixture: ComponentFixture<DbtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
