import { TestBed } from '@angular/core/testing';

import { OrganismService } from './organism.service';

describe('OrganismService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganismService = TestBed.get(OrganismService);
    expect(service).toBeTruthy();
  });
});
