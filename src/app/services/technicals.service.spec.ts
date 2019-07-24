import { TestBed } from '@angular/core/testing';

import { TechnicalsService } from './technicals.service';

describe('TechnicalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnicalsService = TestBed.get(TechnicalsService);
    expect(service).toBeTruthy();
  });
});
