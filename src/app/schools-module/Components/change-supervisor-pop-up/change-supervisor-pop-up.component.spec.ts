import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSupervisorPopUpComponent } from './change-supervisor-pop-up.component';

describe('ChangeSupervisorPopUpComponent', () => {
  let component: ChangeSupervisorPopUpComponent;
  let fixture: ComponentFixture<ChangeSupervisorPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSupervisorPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeSupervisorPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
