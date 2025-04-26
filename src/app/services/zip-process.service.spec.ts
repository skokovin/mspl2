import { TestBed } from '@angular/core/testing';

import { ZipProcessService } from './zip-process.service';

describe('ZipProcessService', () => {
  let service: ZipProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
