import { TestBed } from '@angular/core/testing';

import { AgentUsersService } from './agent-users.service';

describe('AgentUsersService', () => {
  let service: AgentUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
