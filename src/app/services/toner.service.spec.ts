import { TestBed } from '@angular/core/testing';

import { TonerService } from './toner.service';

describe('TonerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TonerService = TestBed.get(TonerService);
    expect(service).toBeTruthy();
  });
});
