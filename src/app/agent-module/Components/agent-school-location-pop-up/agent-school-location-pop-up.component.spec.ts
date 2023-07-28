import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSchoolLocationPopUpComponent } from './agent-school-location-pop-up.component';

describe('AgentSchoolLocationPopUpComponent', () => {
  let component: AgentSchoolLocationPopUpComponent;
  let fixture: ComponentFixture<AgentSchoolLocationPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSchoolLocationPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSchoolLocationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
