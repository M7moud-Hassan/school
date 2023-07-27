import { TestBed } from '@angular/core/testing';

import { AgentNotificationService } from './agent-notification.service';

describe('AgentNotificationService', () => {
  let service: AgentNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
