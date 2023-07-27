import { TestBed } from '@angular/core/testing';

import { ProxyPageService } from './proxy-page.service';

describe('ProxyPageService', () => {
  let service: ProxyPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
