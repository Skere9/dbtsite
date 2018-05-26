import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtUserListComponent } from './dbt-user-list.component';

describe('DbtUserListComponent', () => {
  let component: DbtUserListComponent;
  let fixture: ComponentFixture<DbtUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
