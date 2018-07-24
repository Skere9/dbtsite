import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheExamComponent } from './the-exam.component';

describe('TheExamComponent', () => {
  let component: TheExamComponent;
  let fixture: ComponentFixture<TheExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
