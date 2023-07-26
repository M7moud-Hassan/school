import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentUsersWarningPopUpComponent } from './agent-users-warning-pop-up.component';

describe('AgentUsersWarningPopUpComponent', () => {
  let component: AgentUsersWarningPopUpComponent;
  let fixture: ComponentFixture<AgentUsersWarningPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentUsersWarningPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentUsersWarningPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
