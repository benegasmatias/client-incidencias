import { TestBed } from '@angular/core/testing';

import { SupportsService } from './supports.service';

describe('SupportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupportsService = TestBed.get(SupportsService);
    expect(service).toBeTruthy();
  });
});
