import { TestBed } from '@angular/core/testing';

import { InventarioServiceService } from './inventario-service.service';

describe('InventarioServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventarioServiceService = TestBed.get(InventarioServiceService);
    expect(service).toBeTruthy();
  });
});
