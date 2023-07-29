import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementAdsComponent } from './admin-content-management-ads.component';

describe('AdminContentManagementAdsComponent', () => {
  let component: AdminContentManagementAdsComponent;
  let fixture: ComponentFixture<AdminContentManagementAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
