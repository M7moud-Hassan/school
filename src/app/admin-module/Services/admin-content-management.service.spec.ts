import { TestBed } from '@angular/core/testing';

import { AdminContentManagementService } from './admin-content-management.service';

describe('AdminContentManagementService', () => {
  let service: AdminContentManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminContentManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
