import { TestBed } from '@angular/core/testing';

import { CategoriepostService } from './categoriepost-service/categoriepost.service';

describe('CategoriepostService', () => {
  let service: CategoriepostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriepostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
