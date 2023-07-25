import { TestBed } from '@angular/core/testing';

import { MainAdminService } from './main-admin.service';

describe('MainAdminService', () => {
  let service: MainAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
