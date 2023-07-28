import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentExtendSubscriptionPopUpComponent } from './agent-extend-subscription-pop-up.component';

describe('AgentExtendSubscriptionPopUpComponent', () => {
  let component: AgentExtendSubscriptionPopUpComponent;
  let fixture: ComponentFixture<AgentExtendSubscriptionPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentExtendSubscriptionPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentExtendSubscriptionPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
