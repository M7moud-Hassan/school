import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1BusWayComponent } from './section1-bus-way.component';

describe('Section1BusWayComponent', () => {
  let component: Section1BusWayComponent;
  let fixture: ComponentFixture<Section1BusWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1BusWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1BusWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
