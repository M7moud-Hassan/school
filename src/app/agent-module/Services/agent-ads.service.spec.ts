import { TestBed } from '@angular/core/testing';

import { AgentAdsService } from './agent-ads.service';

describe('AgentAdsService', () => {
  let service: AgentAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
