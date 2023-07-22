import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupervisorPopUpComponent } from './edit-supervisor-pop-up.component';

describe('EditSupervisorPopUpComponent', () => {
  let component: EditSupervisorPopUpComponent;
  let fixture: ComponentFixture<EditSupervisorPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSupervisorPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSupervisorPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
