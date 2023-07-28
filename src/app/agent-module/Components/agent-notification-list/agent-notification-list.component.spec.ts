import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNotificationListComponent } from './agent-notification-list.component';

describe('AgentNotificationListComponent', () => {
  let component: AgentNotificationListComponent;
  let fixture: ComponentFixture<AgentNotificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentNotificationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentNotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
