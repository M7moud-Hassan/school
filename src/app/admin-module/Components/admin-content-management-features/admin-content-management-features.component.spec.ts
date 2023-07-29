import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementFeaturesComponent } from './admin-content-management-features.component';

describe('AdminContentManagementFeaturesComponent', () => {
  let component: AdminContentManagementFeaturesComponent;
  let fixture: ComponentFixture<AdminContentManagementFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
