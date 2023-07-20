import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneDeliveryComponent } from './done-delivery.component';

describe('DoneDeliveryComponent', () => {
  let component: DoneDeliveryComponent;
  let fixture: ComponentFixture<DoneDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
