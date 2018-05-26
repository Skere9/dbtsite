import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtPostNewComponent } from './dbt-post-new.component';

describe('DbtPostNewComponent', () => {
  let component: DbtPostNewComponent;
  let fixture: ComponentFixture<DbtPostNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtPostNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtPostNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
