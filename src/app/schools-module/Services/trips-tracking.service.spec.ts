import { TestBed } from '@angular/core/testing';

import { TripsTrackingService } from './trips-tracking.service';

describe('TripsTrackingService', () => {
  let service: TripsTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
