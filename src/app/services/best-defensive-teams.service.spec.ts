import { TestBed } from '@angular/core/testing';

import { BestDefensiveTeamsService } from './best-defensive-teams.service';

describe('BestDefensiveTeamsService', () => {
  let service: BestDefensiveTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestDefensiveTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
