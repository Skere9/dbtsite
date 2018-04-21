import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtContactComponent } from './dbt-contact.component';

describe('DbtContactComponent', () => {
  let component: DbtContactComponent;
  let fixture: ComponentFixture<DbtContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
