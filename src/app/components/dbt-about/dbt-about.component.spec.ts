import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtAboutComponent } from './dbt-about.component';

describe('DbtAboutComponent', () => {
  let component: DbtAboutComponent;
  let fixture: ComponentFixture<DbtAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
