import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtFooterComponent } from './dbt-footer.component';

describe('DbtFooterComponent', () => {
  let component: DbtFooterComponent;
  let fixture: ComponentFixture<DbtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
