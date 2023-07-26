import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddNewUserComponent } from './agent-add-new-user.component';

describe('AgentAddNewUserComponent', () => {
  let component: AgentAddNewUserComponent;
  let fixture: ComponentFixture<AgentAddNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAddNewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentAddNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
