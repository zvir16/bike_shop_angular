import { TestBed } from '@angular/core/testing';

import { FireproductService } from './fireproduct.service';

describe('FireproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireproductService = TestBed.get(FireproductService);
    expect(service).toBeTruthy();
  });
});
