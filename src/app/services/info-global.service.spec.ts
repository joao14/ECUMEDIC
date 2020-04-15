import { TestBed } from '@angular/core/testing';

import { InfoGlobalService } from './info-global.service';

describe('InfoGlobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoGlobalService = TestBed.get(InfoGlobalService);
    expect(service).toBeTruthy();
  });
});
