import { TestBed } from '@angular/core/testing';

import { FatSecretService } from './fat-secret.service';

describe('FatSecretService', () => {
  let service: FatSecretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatSecretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
