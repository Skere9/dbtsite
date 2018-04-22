import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtExamInfoComponent } from './dbt-exam-info.component';

describe('DbtExamInfoComponent', () => {
  let component: DbtExamInfoComponent;
  let fixture: ComponentFixture<DbtExamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtExamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtExamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
