import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustBeLoggedInComponent } from './must-be-logged-in.component';

describe('MustBeLoggedInComponent', () => {
  let component: MustBeLoggedInComponent;
  let fixture: ComponentFixture<MustBeLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustBeLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustBeLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
