import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSpeedNotificationComponent } from './agent-speed-notification.component';

describe('AgentSpeedNotificationComponent', () => {
  let component: AgentSpeedNotificationComponent;
  let fixture: ComponentFixture<AgentSpeedNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSpeedNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSpeedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
