import { TestBed } from '@angular/core/testing';

import { LibraryStructureService } from './library-structure.service';

describe('LibraryStructureService', () => {
  let service: LibraryStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
