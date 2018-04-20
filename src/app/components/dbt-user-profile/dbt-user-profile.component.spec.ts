import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtUserProfileComponent } from './dbt-user-profile.component';

describe('DbtUserProfileComponent', () => {
  let component: DbtUserProfileComponent;
  let fixture: ComponentFixture<DbtUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
