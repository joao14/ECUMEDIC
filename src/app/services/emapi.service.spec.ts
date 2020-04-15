import { TestBed } from '@angular/core/testing';

import { EmapiService } from './emapi.service';

describe('EmapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmapiService = TestBed.get(EmapiService);
    expect(service).toBeTruthy();
  });
});
