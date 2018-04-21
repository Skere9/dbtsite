import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtTermsComponent } from './dbt-terms.component';

describe('DbtTermsComponent', () => {
  let component: DbtTermsComponent;
  let fixture: ComponentFixture<DbtTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
