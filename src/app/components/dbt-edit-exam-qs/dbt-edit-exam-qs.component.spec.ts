import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtEditExamQsComponent } from './dbt-edit-exam-qs.component';

describe('DbtEditExamQsComponent', () => {
  let component: DbtEditExamQsComponent;
  let fixture: ComponentFixture<DbtEditExamQsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtEditExamQsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtEditExamQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
