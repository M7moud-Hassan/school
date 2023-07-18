import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayJourneyComponent } from './today-journey.component';

describe('TodayJourneyComponent', () => {
  let component: TodayJourneyComponent;
  let fixture: ComponentFixture<TodayJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
