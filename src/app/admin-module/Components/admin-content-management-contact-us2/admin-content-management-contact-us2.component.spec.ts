import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementContactUs2Component } from './admin-content-management-contact-us2.component';

describe('AdminContentManagementContactUs2Component', () => {
  let component: AdminContentManagementContactUs2Component;
  let fixture: ComponentFixture<AdminContentManagementContactUs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementContactUs2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementContactUs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
