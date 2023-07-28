import { TestBed } from '@angular/core/testing';

import { AgentSubscriptionService } from './agent-subscription.service';

describe('AgentSubscriptionService', () => {
  let service: AgentSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
