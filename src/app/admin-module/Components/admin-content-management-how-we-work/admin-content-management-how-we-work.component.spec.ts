import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentManagementHowWeWorkComponent } from './admin-content-management-how-we-work.component';

describe('AdminContentManagementHowWeWorkComponent', () => {
  let component: AdminContentManagementHowWeWorkComponent;
  let fixture: ComponentFixture<AdminContentManagementHowWeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentManagementHowWeWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentManagementHowWeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
