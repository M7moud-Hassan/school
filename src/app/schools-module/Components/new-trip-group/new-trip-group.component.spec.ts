import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTripGroupComponent } from './new-trip-group.component';

describe('NewTripGroupComponent', () => {
  let component: NewTripGroupComponent;
  let fixture: ComponentFixture<NewTripGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTripGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTripGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
