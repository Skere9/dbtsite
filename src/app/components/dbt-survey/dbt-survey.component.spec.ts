import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtSurveyComponent } from './dbt-survey.component';

describe('DbtSurveyComponent', () => {
  let component: DbtSurveyComponent;
  let fixture: ComponentFixture<DbtSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
