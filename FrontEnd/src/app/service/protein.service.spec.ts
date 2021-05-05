import { TestBed } from '@angular/core/testing';

import { ProteinService } from './protein.service';

describe('ProteinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProteinService = TestBed.get(ProteinService);
    expect(service).toBeTruthy();
  });
});
