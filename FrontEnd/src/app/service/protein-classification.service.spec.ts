import { TestBed } from '@angular/core/testing';

import { ProteinClassificationService } from './protein-classification.service';

describe('ProteinClassificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProteinClassificationService = TestBed.get(ProteinClassificationService);
    expect(service).toBeTruthy();
  });
});
