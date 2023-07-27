import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagementInformationSystemComponent } from './admin-management-information-system.component';

describe('AdminManagementInformationSystemComponent', () => {
  let component: AdminManagementInformationSystemComponent;
  let fixture: ComponentFixture<AdminManagementInformationSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManagementInformationSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManagementInformationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
