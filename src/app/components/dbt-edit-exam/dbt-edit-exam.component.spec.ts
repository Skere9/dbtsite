import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtEditExamComponent } from './dbt-edit-exam.component';

describe('DbtEditExamComponent', () => {
  let component: DbtEditExamComponent;
  let fixture: ComponentFixture<DbtEditExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtEditExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtEditExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
