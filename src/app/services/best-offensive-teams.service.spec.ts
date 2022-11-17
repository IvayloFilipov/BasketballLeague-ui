import { TestBed } from '@angular/core/testing';

import { BestOffensiveTeamsService } from './best-offensive-teams.service';

describe('BestOffensiveTeamsService', () => {
  let service: BestOffensiveTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestOffensiveTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
