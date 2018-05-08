import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtBuyComponent } from './dbt-buy.component';

describe('DbtBuyComponent', () => {
  let component: DbtBuyComponent;
  let fixture: ComponentFixture<DbtBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
