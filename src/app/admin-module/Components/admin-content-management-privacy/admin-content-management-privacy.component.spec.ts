import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementPrivacyComponent } from './admin-content-management-privacy.component';

describe('AdminContentManagementPrivacyComponent', () => {
  let component: AdminContentManagementPrivacyComponent;
  let fixture: ComponentFixture<AdminContentManagementPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
