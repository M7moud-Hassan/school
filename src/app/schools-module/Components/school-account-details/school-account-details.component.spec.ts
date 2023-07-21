import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAccountDetailsComponent } from './school-account-details.component';

describe('SchoolAccountDetailsComponent', () => {
  let component: SchoolAccountDetailsComponent;
  let fixture: ComponentFixture<SchoolAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAccountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
