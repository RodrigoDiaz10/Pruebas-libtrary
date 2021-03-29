import { TestBed } from '@angular/core/testing';

import { LibraryFieldService } from './library-field.service';

describe('LibraryFieldService', () => {
  let service: LibraryFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
