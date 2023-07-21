import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbsenceOrderComponent } from './add-absence-order.component';

describe('AddAbsenceOrderComponent', () => {
  let component: AddAbsenceOrderComponent;
  let fixture: ComponentFixture<AddAbsenceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAbsenceOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAbsenceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
