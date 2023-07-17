import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingTripComponent } from './tracking-trip.component';

describe('TrackingTripComponent', () => {
  let component: TrackingTripComponent;
  let fixture: ComponentFixture<TrackingTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
