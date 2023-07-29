import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementContactUsComponent } from './admin-content-management-contact-us.component';

describe('AdminContentManagementContactUsComponent', () => {
  let component: AdminContentManagementContactUsComponent;
  let fixture: ComponentFixture<AdminContentManagementContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
