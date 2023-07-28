import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddNewNotificationComponent } from './agent-add-new-notification.component';

describe('AgentAddNewNotificationComponent', () => {
  let component: AgentAddNewNotificationComponent;
  let fixture: ComponentFixture<AgentAddNewNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAddNewNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentAddNewNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
