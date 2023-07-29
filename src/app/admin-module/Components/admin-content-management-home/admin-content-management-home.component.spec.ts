import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementHomeComponent } from './admin-content-management-home.component';

describe('AdminContentManagementHomeComponent', () => {
  let component: AdminContentManagementHomeComponent;
  let fixture: ComponentFixture<AdminContentManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
