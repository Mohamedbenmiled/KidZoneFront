import { TestBed } from '@angular/core/testing';

import { EnfantserService } from './enfantser.service';

describe('EnfantserService', () => {
  let service: EnfantserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfantserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
