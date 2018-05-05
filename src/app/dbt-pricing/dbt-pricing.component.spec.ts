import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtPricingComponent } from './dbt-pricing.component';

describe('DbtPricingComponent', () => {
  let component: DbtPricingComponent;
  let fixture: ComponentFixture<DbtPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
