import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSideMenuComponent } from './agent-side-menu.component';

describe('AgentSideMenuComponent', () => {
  let component: AgentSideMenuComponent;
  let fixture: ComponentFixture<AgentSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
