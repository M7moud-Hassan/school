import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetedsComponent } from './targeteds.component';

describe('TargetedsComponent', () => {
  let component: TargetedsComponent;
  let fixture: ComponentFixture<TargetedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
