import { TestBed } from '@angular/core/testing';

import { HighlightMatchService } from './highlight-match.service';

describe('HighlightMatchService', () => {
  let service: HighlightMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
