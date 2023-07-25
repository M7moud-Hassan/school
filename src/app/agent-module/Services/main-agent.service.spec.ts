import { TestBed } from '@angular/core/testing';

import { MainAgentService } from './main-agent.service';

describe('MainAgentService', () => {
  let service: MainAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
