import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddNewSubscribersComponent } from './agent-add-new-subscribers.component';

describe('AgentAddNewSubscribersComponent', () => {
  let component: AgentAddNewSubscribersComponent;
  let fixture: ComponentFixture<AgentAddNewSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAddNewSubscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentAddNewSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
