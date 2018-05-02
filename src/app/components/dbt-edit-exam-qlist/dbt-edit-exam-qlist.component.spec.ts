import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtEditExamQlistComponent } from './dbt-edit-exam-qlist.component';

describe('DbtEditExamQlistComponent', () => {
  let component: DbtEditExamQlistComponent;
  let fixture: ComponentFixture<DbtEditExamQlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtEditExamQlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtEditExamQlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
