import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementPartnersComponent } from './admin-content-management-partners.component';

describe('AdminContentManagementPartnersComponent', () => {
  let component: AdminContentManagementPartnersComponent;
  let fixture: ComponentFixture<AdminContentManagementPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
