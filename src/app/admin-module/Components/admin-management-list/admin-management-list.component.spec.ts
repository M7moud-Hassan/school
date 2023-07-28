import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagementListComponent } from './admin-management-list.component';

describe('AdminManagementListComponent', () => {
  let component: AdminManagementListComponent;
  let fixture: ComponentFixture<AdminManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManagementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
