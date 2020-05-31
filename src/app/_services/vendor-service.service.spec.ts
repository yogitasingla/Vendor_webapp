import { TestBed } from '@angular/core/testing';

import { VendorServiceService } from './vendor-service.service';

describe('VendorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorServiceService = TestBed.get(VendorServiceService);
    expect(service).toBeTruthy();
  });
});
