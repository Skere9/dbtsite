import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouCheckEmailComponent } from './thank-you-check-email.component';

describe('ThankYouCheckEmailComponent', () => {
  let component: ThankYouCheckEmailComponent;
  let fixture: ComponentFixture<ThankYouCheckEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouCheckEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouCheckEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
