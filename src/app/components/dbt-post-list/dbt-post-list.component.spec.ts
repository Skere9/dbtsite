import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtPostListComponent } from './dbt-post-list.component';

describe('DbtPostListComponent', () => {
  let component: DbtPostListComponent;
  let fixture: ComponentFixture<DbtPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
