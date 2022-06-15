import { TestBed } from '@angular/core/testing';

import { SpotyService } from './spoty.service';

describe('SpotyService', () => {
  let service: SpotyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
