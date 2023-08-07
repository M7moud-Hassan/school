import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSpeedNotificationPopUpComponent } from './agent-speed-notification-pop-up.component';

describe('AgentSpeedNotificationPopUpComponent', () => {
  let component: AgentSpeedNotificationPopUpComponent;
  let fixture: ComponentFixture<AgentSpeedNotificationPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSpeedNotificationPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSpeedNotificationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
