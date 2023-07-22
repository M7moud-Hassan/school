import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingAllComponent } from './tracking-all.component';

describe('TrackingAllComponent', () => {
  let component: TrackingAllComponent;
  let fixture: ComponentFixture<TrackingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
