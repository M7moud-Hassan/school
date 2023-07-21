import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsAndGroupsComponent } from './trips-and-groups.component';

describe('TripsAndGroupsComponent', () => {
  let component: TripsAndGroupsComponent;
  let fixture: ComponentFixture<TripsAndGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsAndGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsAndGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
