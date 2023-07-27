import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSupportListComponent } from './agent-support-list.component';

describe('AgentSupportListComponent', () => {
  let component: AgentSupportListComponent;
  let fixture: ComponentFixture<AgentSupportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSupportListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSupportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
