import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtSitemapComponent } from './dbt-sitemap.component';

describe('DbtSitemapComponent', () => {
  let component: DbtSitemapComponent;
  let fixture: ComponentFixture<DbtSitemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtSitemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
