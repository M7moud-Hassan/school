import { TestBed } from '@angular/core/testing';

import { TripsAndGroupsService } from './trips-and-groups.service';

describe('TripsAndGroupsService', () => {
  let service: TripsAndGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsAndGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
