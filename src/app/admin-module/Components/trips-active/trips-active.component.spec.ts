import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsActiveComponent } from './trips-active.component';

describe('TripsActiveComponent', () => {
  let component: TripsActiveComponent;
  let fixture: ComponentFixture<TripsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
