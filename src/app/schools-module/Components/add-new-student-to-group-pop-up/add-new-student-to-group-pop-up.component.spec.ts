import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStudentToGroupPopUpComponent } from './add-new-student-to-group-pop-up.component';

describe('AddNewStudentToGroupPopUpComponent', () => {
  let component: AddNewStudentToGroupPopUpComponent;
  let fixture: ComponentFixture<AddNewStudentToGroupPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewStudentToGroupPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewStudentToGroupPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
