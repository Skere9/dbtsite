import { TestBed, inject } from '@angular/core/testing';

import { AppWideService } from './appwide.service';

describe('AppWideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWideService]
    });
  });

  it('should be created', inject([AppWideService], (service: AppWideService) => {
    expect(service).toBeTruthy();
  }));
});
