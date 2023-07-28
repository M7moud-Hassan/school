import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSubscribersListComponent } from './agent-subscribers-list.component';

describe('AgentSubscribersListComponent', () => {
  let component: AgentSubscribersListComponent;
  let fixture: ComponentFixture<AgentSubscribersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSubscribersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSubscribersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
