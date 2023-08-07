import { TestBed } from '@angular/core/testing';

import { SchoolHomePageService } from './school-home-page.service';

describe('SchoolHomePageService', () => {
  let service: SchoolHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
