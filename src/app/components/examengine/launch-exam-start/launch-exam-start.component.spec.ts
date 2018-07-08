import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchExamStartComponent } from './launch-exam-start.component';

describe('LaunchExamStartComponent', () => {
  let component: LaunchExamStartComponent;
  let fixture: ComponentFixture<LaunchExamStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchExamStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchExamStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
