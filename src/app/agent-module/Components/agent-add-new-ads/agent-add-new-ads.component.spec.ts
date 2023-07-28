import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddNewAdsComponent } from './agent-add-new-ads.component';

describe('AgentAddNewAdsComponent', () => {
  let component: AgentAddNewAdsComponent;
  let fixture: ComponentFixture<AgentAddNewAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAddNewAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentAddNewAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
