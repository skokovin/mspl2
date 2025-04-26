import { TestBed } from '@angular/core/testing';

import { ZipdbService } from './zipdb.service';

describe('ZipdbService', () => {
  let service: ZipdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
